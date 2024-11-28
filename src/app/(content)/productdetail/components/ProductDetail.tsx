"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Import useSearchParams từ next/navigation
import { getProductById } from '@/ultis/ProductOdata';  // Import function getProductById
import Header from "@/layout/_component/Header/Header";
import Navbar from "@/layout/_component/Header/navbar/Navbar";
import product from '../assets/product.jpeg';  // Sử dụng ảnh mặc định nếu không có ảnh từ API

const ProductDetail = () => {
  const searchParams = useSearchParams();  // Dùng useSearchParams để lấy tham số từ URL
  const [productDetail, setProductDetail] = useState<any>(null);  // Dữ liệu sản phẩm chi tiết
  const [error, setError] = useState<string | null>(null);  // Xử lý lỗi

  useEffect(() => {
    // Lấy id từ searchParams (nếu có)
    const id = searchParams.get('id');  // Lấy giá trị 'id' từ URL query params

    if (!id) {
      setError("Không có ID sản phẩm trong URL");
      return; // Nếu không có id thì không thực hiện gì
    }

    const numericId = Number(id);  // Chuyển id thành số

    if (isNaN(numericId)) {
      setError("ID không hợp lệ");
      return;
    }

    // Hàm fetch dữ liệu chi tiết sản phẩm
    const fetchProductDetail = async () => {
      try {
        const response = await getProductById(numericId);  // Gọi API với id đã chuyển đổi thành số
        console.log('Product Data:', response);  // Log để kiểm tra dữ liệu trả về
        setProductDetail(response);  // Cập nhật trạng thái sản phẩm
      } catch (error) {
        setError("Lỗi khi tải dữ liệu sản phẩm");
        console.error("Error:", error);
      }
    };

    fetchProductDetail();
  }, [searchParams]);  // Chạy lại khi searchParams thay đổi

  if (error) {
    return <div>{error}</div>;  // Hiển thị lỗi nếu có
  }

  if (!productDetail) {
    return <div>Loading...</div>;  // Hiển thị Loading nếu chưa có dữ liệu
  }

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
            <li className="font-bold">{productDetail.name}</li>
          </ul>
        </nav>
      </div>

      {/* Product Detail Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Product Image */}
        <div className="md:w-1/2 p-4 flex justify-center">
          <img
            src={productDetail.productImage ? productDetail.productImage : product}  // Chỉ lấy ảnh từ API, nếu không có dùng ảnh mặc định
            alt="Product Image"
            width={500}
            height={500}
            className="rounded object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-2">
            {productDetail.name}
          </h2>
          <div className="text-gray-700 mb-4">
            <span className="text-lg font-bold">{productDetail.price.toLocaleString()} VND/kg</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
            <span className="ml-2 text-gray-600">({productDetail.reviewCount} đánh giá)</span>
          </div>

          {/* Description */}
          <div className="mb-4">
            <h3 className="font-bold mb-2">Mô tả</h3>
            <p>{productDetail.description}</p>
          </div>

          {/* Stock */}
          <div className="mb-4">
            <h3 className="font-bold mb-2">Số lượng tồn kho</h3>
            <p>{productDetail.stockQuantity}</p>
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
      <div className="container mx-auto p-4">
        <div className="flex items-center">
          <img
            src={""}  // Để trống ảnh người bán (seller)
            alt="Seller Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Seller Name</h3>
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
    </div>
  );
};

export default ProductDetail;
