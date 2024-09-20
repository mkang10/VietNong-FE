import React from "react";
import Image from 'next/image';
import Header from "@/layout/_component/Header/Header";
import Navbar from "@/layout/_component/Header/navbar/Navbar";
import { BgColorsOutlined, ShoppingCartOutlined, ToolOutlined, SunOutlined, ExperimentOutlined } from '@ant-design/icons';
import mainbanner from '../assets/mainbanner.jpg'
import side1 from '../assets/side1.jpg'
import side2 from '../assets/side2.jpg'
const categories = [
  { name: 'Nông sản', icon: <SunOutlined /> },
  { name: 'Phân bón', icon: <ExperimentOutlined /> },
  { name: 'Thiết bị', icon: <ToolOutlined /> },
  { name: 'Phân bón', icon: <ExperimentOutlined /> },
  { name: 'Công cụ trồng trọt', icon: <BgColorsOutlined /> },
];
const products = new Array(30).fill({
  name: 'Dưa Lưới Ruột Vàng',
  price: '80,000 - 100,000 VND/kg',
  imageUrl: '/path-to-image', // Thay đường dẫn hình ảnh của bạn
});

const Product = () => {
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/*Header*/}
      <Header></Header>
      <div>
        <Navbar></Navbar>
      </div>
    {/* Banner Section */}
<div className="container mx-auto mt-4 px-4">
  <div className="grid grid-cols-12 gap-4">
    {/* Main Banner */}
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
    {/* Side Banners */}
    <div className="col-span-4 flex flex-col space-y-3">
    <div className="bg-white shadow-md rounded-lg overflow-hidden h-[225px]">
        <Image
          src={side1}
          alt="Side Banner 1"
          className="w-full h-auto object-cover" // Make height auto for responsiveness
          style={{ aspectRatio: '16/9' }} // Set aspect ratio
        />
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden h-[225px]">
        <Image
          src={side2}
          alt="Side Banner 2"
          className="w-full h-auto object-cover" // Make height auto for responsiveness
          style={{ aspectRatio: '16/9' }} // Set aspect ratio
        />
      </div>
    </div>
  </div>
</div>

    {/* Category Section */}
    <div className="container mx-auto mt-6 px-4">
        <div className="grid grid-cols-5 gap-4 text-center">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white p-4 shadow-md rounded-full flex items-center justify-center text-2xl text-green-600">
                {category.icon}
              </div>
              <p className="mt-2 text-sm font-medium">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Gợi ý hôm nay */}
      <div className="container mx-auto mt-10 px-4">
        <h2 className="text-center text-2xl font-semibold mb-6">Gợi ý hôm nay</h2>
       
      </div>
      {/* Grid sản phẩm */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.price}</p>
              <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg">
                Xem chi tiết
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Button Xem Thêm */}
      <div className="text-center mt-10">
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg">
          Xem thêm
        </button>
      </div>
    </div>
  );
};

export default Product;
