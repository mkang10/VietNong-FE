import React from "react";
import Image from 'next/image';
import Header from "@/layout/_component/Header/Header";
import Navbar from "@/layout/_component/Header/navbar/Navbar";
import product from '../assets/product.jpeg';

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
                        <li></li>
                        <li>{'>'}</li>
                        <li></li>
                        <li>{'>'}</li>
                        <li className="font-bold"></li>
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
                            src="/path/to/logo.jpg"
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
                        <div>Đánh giá: </div>
                        <div>Sản phẩm: </div>
                        <div>Tham gia: </div>
                        <div>Người theo dõi: </div>
                    </div>
                </div>
                 {/* Additional Product Information */}
                 <div className="bg-white shadow-md rounded mt-8 p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-600">Chi tiết sản phẩm</h3>
                    <ul className="text-gray-700 space-y-2 mb-6">
                        <li></li>
                        <li>{'>'}</li>
                        <li></li>
                        <li>{'>'}</li>
                        <li></li>
                        <li>{'>'}</li>
                        <li className="font-bold"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                    <h3 className="text-xl font-bold mb-4 text-gray-600">Mô tả sản phẩm</h3>
                    <p className="text-gray-700">
                        
                        <ul className="list-disc pl-5">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        
                    </p>
                </div>
                {/* Feed back */}
                <div className="bg-white shadow-md rounded mt-8 p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-600"> ĐÁNH GIÁ SẢN PHẨM </h3>
                </div>
            </div>
            </div>
        
    );
};

export default ProductDetail;