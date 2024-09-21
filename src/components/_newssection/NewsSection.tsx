import React from "react";
import { Button, Carousel } from 'antd';
import { SearchOutlined, BellOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import HeaderNews from "./_component/HeaderNews";

const NewsSection = () => {
    return (
       

<section className="py-12 bg-white">
  <div className="container mx-auto">
    {/* Header */}
    <HeaderNews></HeaderNews>
    {/* News Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* News Article 1 */}
      <div className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src="https://via.placeholder.com/600x400"
          alt="Mưa to gây ngập trên diện rộng ở Tiền Giang"
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4 bg-[#93A267] text-white px-3 py-1 rounded-lg">
          Top 10 tháng
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-[#93A267] mb-2">
            Mưa to gây ngập trên diện rộng ở Tiền Giang
          </h3>
          <p className="text-gray-600 mb-4">
            Bài viết ngắn gọn về tình trạng ngập lụt tại Tiền Giang...
          </p>
          <Button type="link" className="text-[#93A267]">Đọc tiếp</Button>
        </div>
      </div>

      {/* News Article 2 */}
      <div className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src="https://via.placeholder.com/600x400"
          alt="Trồng lúa cạn, năng suất không kém lúa nước"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-[#93A267] mb-2">
            Trồng lúa cạn, năng suất không kém lúa nước
          </h3>
          <p className="text-gray-600 mb-4">
            Bài viết giới thiệu phương pháp trồng lúa không cần tưới...
          </p>
          <Button type="link" className="text-[#93A267]">Đọc tiếp</Button>
        </div>
      </div>
    </div>
  </div>
</section>
    
    )
}

export default NewsSection;

