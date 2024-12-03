"use client"; // Ensure this is a Client Component

import React, { useState, useEffect, Suspense } from "react";
import { UserProfileUpdateDTO } from "@/type/user";
import { updateUserProfileApi, getUserById } from "@/ultis/UserAPI";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation';

const Search = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id'); // Get the 'id' from query parameters

    return id; // You can return or process the id as needed
};

const UpdateUserProfile: React.FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<UserProfileUpdateDTO>({
        email: "",
        fullName: "",
        phoneNumber: "",
        address: "",
        dateOfBirth: "",
        gender: "",
        profileImage: undefined
    });

    const [responseMessage, setResponseMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [countdown, setCountdown] = useState<number | null>(null);
    
    // Wrap the Search component in Suspense
    const id = (
        <Suspense fallback={<div>Loading...</div>}>
            <Search />
        </Suspense>
    );

    useEffect(() => {
        if (!id) return;

        const fetchUserData = async () => {
            try {
                const userData = await getUserById(Number(id)); // Use the id
                setFormData({
                    email: userData.email,
                    fullName: userData.fullName,
                    phoneNumber: userData.phoneNumber,
                    address: userData.address,
                    dateOfBirth: userData.dateOfBirth,
                    gender: userData.gender,
                });
            } catch (error) {
                console.error("Error fetching user data:", error);
                setResponseMessage("Không thể tải thông tin người dùng.");
            }
        };

        fetchUserData();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFormData((prev) => ({ ...prev, profileImage: file }));
        }
    };

    const handleBack = () => {
        router.push(`/user/${id}`); // Back to user info page
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setResponseMessage(null);

        const today = new Date();
        const birthDate = new Date(formData.dateOfBirth);
        const age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();

        if (age < 18 || (age === 18 && month < 0)) {
            setResponseMessage("Bạn phải trên 18 tuổi để cập nhật thông tin.");
            setIsLoading(false);
            return;
        }

        if (!id) {
            setResponseMessage("Không tìm thấy thông tin người dùng.");
            setIsLoading(false);
            return;
        }

        try {
            await updateUserProfileApi(Number(id), formData); // Use the id
            setResponseMessage("Thông tin của bạn đã được cập nhật thành công!");
            setCountdown(5); // Set countdown to 5 seconds

            const countdownInterval = setInterval(() => {
                setCountdown((prev) => {
                    if (prev === 1) {
                        clearInterval(countdownInterval);
                        router.push(`/user/${id}`); // Back to user info page
                        return null;
                    }
                    return prev ? prev - 1 : null;
                });
            }, 1000); // Update every second
            
        } catch (error) {
            setResponseMessage("Đã xảy ra lỗi khi cập nhật thông tin.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Cập Nhật Thông Tin Người Dùng</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Họ và Tên</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Số Điện Thoại</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Địa Chỉ</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Ngày Sinh</label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Giới Tính</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        >
                            <option value="">Chọn giới tính</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                            <option value="Khác">Khác</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Ảnh Đại Diện</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full mt-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
                            disabled={isLoading}
                        >
                            {isLoading ? "Đang Cập Nhật..." : "Cập Nhật Hồ Sơ"}
                        </button>
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={handleBack}
                            className="w-full mt-2 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-200"
                        >
                            Quay lại
                        </button>
                    </div>
                    {responseMessage && (
                        <div className={`mt-4 text-sm p-4 rounded ${responseMessage.includes("thành công") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                            {responseMessage}
                        </div>
                    )}
                    {countdown !== null && (
                        <div className="mt-4 text-lg text-center text-gray-600">
                            Bạn sẽ được chuyển hướng sau <span className="font-semibold">{countdown} giây</span>.
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default UpdateUserProfile;