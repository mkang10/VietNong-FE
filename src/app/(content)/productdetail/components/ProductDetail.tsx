import React from "react";
import Image from 'next/image';
import Header from "@/layout/_component/Header/Header";
import Navbar from "@/layout/_component/Header/navbar/Navbar";
import product from '../assets/product.jpeg';
import avatar from '../assets/avatar.png';
import shop from '../assets/shop.jpg'
const products = new Array(30).fill({
    name: 'Dưa Lưới Ruột Vàng',
    price: '80,000 - 100,000 VND/kg',
    imageUrl: '/path-to-image', // Thay đường dẫn hình ảnh của bạn
  });
const ProductDetail = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <Header />
            <div>
                <Navbar />
            </div>

            {/* Breadcrumb */}
            <div className="container mx-auto p-4">
                <nav className="text-gray-600 text-sm mb-4">
                    <ul className="flex space-x-2">
                        <li>Chợ</li>
                        <li>{'>'}</li>
                        <li>Sản phẩm</li>
                        <li>{'>'}</li>
                        <li>Hạt giống</li>
                        <li>{'>'}</li>
                        <li className="font-bold">Tổng Hợp Các Loại Hạt giống Dây Leo</li>
                    </ul>
                </nav>

                {/* Product Detail Section */}
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    {/* Product Image */}
                    <div className="md:w-1/2 p-4 flex justify-center">
                        <Image
                            src={product}
                            alt="Product Image"
                            width={500}
                            height={500}
                            className="rounded object-cover"
                        />
                    </div>
                    
                    {/* Product Info */}
                    <div className="md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-2">
                            Tổng Hợp Các Loại Hạt giống Dây Leo
                        </h2>
                        <div className="text-gray-700 mb-4">
                            <span className="text-lg font-bold">₫4,900 - ₫23,400</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
                            <span className="ml-2 text-gray-600">(528 đánh giá)</span>
                        </div>
                        
                        {/* Product Variants */}
                        <div className="mb-4">
                            <h3 className="font-bold mb-2">Phân loại</h3>
                            <div className="grid grid-cols-3 gap-2">
                                <button className="p-2 border rounded">Bầu Dài</button>
                                <button className="p-2 border rounded">Mướp Đắng</button>
                                <button className="p-2 border rounded">Dưa Hấu</button>
                            </div>
                        </div>
                        
                        {/* Quantity Selector */}
                        <div className="mb-4">
                            <h3 className="font-bold mb-2">Số lượng</h3>
                            <div className="flex items-center">
                                <button className="p-2 border rounded">-</button>
                                <span className="mx-2">1</span>
                                <button className="p-2 border rounded">+</button>
                            </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                            <button className="bg-green-500 text-white py-2 px-4 rounded">
                                Thêm vào giỏ hàng
                            </button>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded">
                                Mua ngay
                            </button>
                        </div>
                    </div>
                </div>

                {/* Seller Info Section */}
                <div className="bg-white shadow-md rounded mt-8 p-6 border border-blue-200">
                    <div className="flex items-center">
                        <Image
                            src={shop}
                            alt="Seller Logo"
                            width={60}
                            height={60}
                            className="rounded-full"
                        />
                        <div className="ml-4">
                            <h3 className="text-lg font-bold">Hạt Giống Nông Sản Vàng</h3>
                            <p className="text-sm text-gray-500">Online 1 giờ trước</p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4 text-sm text-gray-600">
                        <div>Đánh giá: 4.8</div>
                        <div>Sản phẩm: 100+</div>
                        <div>Tham gia: 1 năm trước</div>
                        <div>Người theo dõi: 10K</div>
                    </div>
                </div>

                {/* Additional Product Information */}
                <div className="bg-white shadow-md rounded mt-8 p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-600">Chi tiết sản phẩm</h3>
                    <ul className="text-gray-700 space-y-2 mb-6">
                        <li>Loại hạt giống: Dây leo</li>
                        <li>Xuất xứ: Việt Nam</li>
                        <li>Số lượng hạt giống: 10g</li>
                    </ul>

                    <h3 className="text-xl font-bold mb-4 text-gray-600">Mô tả sản phẩm</h3>
                    <div className="text-gray-700">
                        <ul className="list-disc pl-5">
                            <li>Hạt giống chất lượng cao, dễ trồng.</li>
                            <li>Phù hợp với khí hậu Việt Nam.</li>
                            <li>Đóng gói cẩn thận, bảo quản tốt.</li>
                        </ul>
                    </div>
                </div>

                {/* Feedback Section */}
                <div className="bg-white shadow-md rounded mt-8 p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-600">ĐÁNH GIÁ SẢN PHẨM</h3>
                    <div className="flex items-center mb-6">
                        <span className="text-3xl font-bold">4.9</span>
                        <span className="ml-2 text-yellow-500 text-2xl">⭐⭐⭐⭐⭐</span>
                        <span className="ml-2 text-gray-600">(120 đánh giá)</span>
                    </div>
                    {/* Feedback List */}
                    <div className="space-y-4">
                        {/* Single Feedback */}
                        <div className="p-4 bg-gray-100 rounded">
                            <div className="flex items-center mb-2">
                                <Image
                                    src={avatar}
                                    alt="User Avatar"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <div className="ml-3">
                                    <h4 className="font-bold">Diệu Lâm</h4>
                                    <span className="text-sm text-gray-500">Đã mua hàng</span>
                                </div>
                            </div>
                            <div className="text-gray-700 mb-2">
                                Sản phẩm tốt, đóng gói chắc chắn, giao hàng nhanh chóng. Sẽ ủng hộ shop lần sau.
                            </div>
                            <div className="text-xs text-gray-500">2 ngày trước</div>
                        </div>

                        {/* Repeat this block for additional feedback */}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-6">
                        <button className="mx-1 px-2 py-1 border rounded text-sm">1</button>
                        <button className="mx-1 px-2 py-1 border rounded text-sm">2</button>
                        <button className="mx-1 px-2 py-1 border rounded text-sm">3</button>
                    </div>    
                </div>
                {/*More Product In Shop*/}
                <div className="bg-white shadow-md rounded mt-8 p-6">
                        
                        </div>
            </div>
        </div>
    );
};

export default ProductDetail;
