import React from "react";
import { Button, Carousel } from 'antd';
import { SearchOutlined, BellOutlined, QuestionCircleOutlined } from '@ant-design/icons';

const HeaderNews = () => {
    return (
    <>
        <h2 className="text-4xl font-bold text-[#93A267] mb-6">TIN TỨC NÔNG NGHIỆP</h2>
        <p className="text-lg text-gray-700 mb-8">
      Tin tức nông nghiệp bao gồm các thông tin liên quan đến sản xuất, chăn nuôi, trồng trọt, và các hoạt động kinh doanh trong lĩnh vực nông nghiệp.
        </p>
        {/* Filter Buttons */}
    <div className="flex justify-start space-x-4 mb-8">
      <Button className="bg-[#93A267] text-white rounded-full px-4 py-2">Mới nhất</Button>
      <Button className="bg-[#93A267] text-white rounded-full px-4 py-2">Nông sản</Button>
      <Button className="bg-[#93A267] text-white rounded-full px-4 py-2">Công nghệ</Button>
      <Button className="bg-[#93A267] text-white rounded-full px-4 py-2">Thời tiết</Button>
      <Button type="link" className="px-4 py-2">Xem tất cả</Button>
    </div>
    </>
    
    )
}

export default HeaderNews;

