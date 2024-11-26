"use client"; 

import React, { useState, useEffect } from "react";
import { Button } from 'antd';
import { SearchOutlined, BellOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 
import logo from '../Header/asset/logo.png';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [roleId, setRoleId] = useState<number | null>(null); // Khởi tạo state cho roleId
    const router = useRouter(); // Khởi tạo useRouter

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedRoleId = localStorage.getItem('roleId');

        if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }

        if (storedRoleId) {
            setRoleId(parseInt(storedRoleId, 10)); // Chuyển đổi roleId thành số
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('token'); // Xóa token khi đăng xuất
        localStorage.removeItem('roleId'); // Xóa roleId khi đăng xuất
        setIsLoggedIn(false);
        setUsername('');
        setRoleId(null); // Reset roleId
        router.push('/auth/login'); // Chuyển hướng về trang đăng nhập
    };

    return (
        <header className="bg-[#93A267] text-white py-2">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Section - Logo */}
                <div className="flex items-center space-x-4">
                    <Image
                        src={logo}
                        alt="Việt Nông"
                        width={64}
                        height={64}
                        className="h-auto"
                    />
                    <div className="text-sm">
                        {roleId === 4 ? (
                            <a href="/auth/registerseller" className="hover:underline">
                                Trở thành người bán
                            </a>
                        ) : roleId === 3 ? (
                            <a href="/" className="hover:underline">
                                Quay về trang mua hàng
                            </a>
                        ) : (
                            <a href="/" className="hover:underline">
                                Quay về trang mua hàng
                            </a>
                        )}{' '}
                        |{' '}
                        {roleId === 4 ? (
                            <a href="#" className="hover:underline">
                                Tải Ứng Dụng
                            </a>
                        ) : roleId === 3 ? (
                            <a href="/Welcome" className="hover:underline">
                                Quay Về Trang Người Bán
                            </a>
                        ) : (
                            <a href="/" className="hover:underline">
                                Quay về trang mua hàng
                            </a>
                        )}{' '}
                    </div>
                </div>

                {/* Middle Section - Search */}
                <div className="flex items-center w-1/2">
                    <input
                        type="text"
                        placeholder="Tìm kiếm"
                        className="w-full p-2 rounded-l-full text-black focus:outline-none"
                    />
                    <Button
                        type="primary"
                        icon={<SearchOutlined />}
                        className="rounded-r-full h-auto"
                        style={{
                            backgroundColor: "#93A267",
                            borderColor: "#93A267",
                            color: "white",
                            padding: "4px",
                        }}
                    />
                </div>

                {/* Right Section - Links */}
                <div className="flex items-center space-x-4 text-sm">
                    <Button type="link" className="text-white">
                        <BellOutlined /> Thông báo
                    </Button>
                    <Button type="link" className="text-white">
                        <QuestionCircleOutlined /> Hỗ trợ
                    </Button>
                    {isLoggedIn ? (
                        <>
                            <span className="text-white">Xin chào, {username}</span>
                            <Button type="link" className="text-white" onClick={handleLogout}>
                                Đăng xuất
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button type="link" className="text-white" href="auth/register">
                                Đăng ký
                            </Button>
                            <Button type="link" className="text-white" href="auth/login">
                                Đăng nhập
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;