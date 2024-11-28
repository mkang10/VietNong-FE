"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Header from "@/layout/_component/Header/Header";
import Navbar from "@/layout/_component/Header/navbar/Navbar";
import { getProducts } from '@/ultis/ProductOdata';
import { getCategories } from '@/ultis/CategoryOdata';
import { useRouter } from 'next/navigation'; // Import useRouter để chuyển hướng
import mainbanner from '../assets/mainbanner.jpg';
import side1 from '../assets/side1.jpg';
import side2 from '../assets/side2.jpg';

interface Product {
  productId: number;
  name: string;
  categoryId: number;
  price: number;
  weight: number;
  description: string;
  stockQuantity: number;
  averageRating: number;
  reviewCount: number;
  productImage: string;
  createdAt: string;
}

interface Category {
  categoryId: number;
  categoryName: string;
  description: string;
  image: string;
}

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize] = useState<number>(50);
  const [totalCount, setTotalCount] = useState<number>(0);
  const router = useRouter(); // Hook router để chuyển hướng

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts(currentPage, pageSize);
        setProducts(response.data);
        setTotalCount(response.totalCount);
      } catch (error) {
        setError('Error loading products');
        console.error('Error loading products:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        setError('Error loading categories');
        console.error('Error loading categories:', error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, [currentPage, pageSize]);

  const totalPages = Math.ceil(totalCount / pageSize);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleViewDetails = (productId: number) => {
    router.push(`/productdetail?id=${productId}`); // Truyền productId vào URL
  };
  
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`px-3 py-2 rounded-lg ${i === currentPage ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Header />
      <div>
        <Navbar />
      </div>

      {/* Banner Section */}
      <div className="container mx-auto mt-4 px-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden border border-transparent h-[450px]">
              <Image
                src={mainbanner}
                alt="banner"
                layout="responsive"
                width={800}
                height={450}
                className="h-auto"
              />
            </div>
          </div>
          <div className="col-span-4 flex flex-col space-y-3">
            <div className="bg-white shadow-md rounded-lg overflow-hidden h-[225px]">
              <Image
                src={side1}
                alt="Side Banner 1"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '16/9' }}
              />
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden h-[225px]">
              <Image
                src={side2}
                alt="Side Banner 2"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '16/9' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="container mx-auto mt-6 px-4">
        <h2 className="text-center text-2xl font-semibold mb-6">Danh mục sản phẩm</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
          {categories.length > 0 ? (
            categories.map((category) => (
              <div key={category.categoryId} className="flex flex-col items-center">
                <div className="bg-white shadow-md rounded-full w-16 h-16 flex items-center justify-center text-green-600">
                  <img
                    src={category.image || '/path-to-placeholder-image'}
                    alt={category.categoryName}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </div>
                <p className="mt-3 text-lg font-medium">{category.categoryName}</p>
              </div>
            ))
          ) : (
            <p>Loading categories...</p>
          )}
        </div>
      </div>

      {/* Grid sản phẩm */}
      <div className="container mx-auto px-4 mt-10">
        <h2 className="text-center text-2xl font-semibold mb-6">Sản phẩm</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.productId} className="bg-white shadow-md rounded-lg p-4">
                <img
                  src={product.productImage || '/path-to-placeholder-image'}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-4"
                />
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.price.toLocaleString()} VND/kg</p>
                <p className="text-sm text-gray-400">Stock: {product.stockQuantity}</p>
                <p className="text-sm text-gray-400">
                  Rating: {product.averageRating} ({product.reviewCount} reviews)
                </p>
                <button
                  className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg"
                  onClick={() => handleViewDetails(product.productId)} // Gọi hàm handleViewDetails
                >
                  Xem chi tiết
                </button>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="text-center mt-10 flex items-center justify-center space-x-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
        >
          Trang trước
        </button>
        <div className="flex items-center space-x-2">
          {renderPageNumbers()}
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          Trang sau
        </button>
      </div>
    </div>
  );
};

export default Product;
