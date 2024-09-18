import React from 'react';
import { Button, Carousel } from 'antd';
import { SearchOutlined, BellOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import Header from '@/layout/_component/Header/Header';
import Navbar from '@/layout/_component/Header/navbar/Navbar';
import NewsSection from '@/components/_newssection/NewsSection';
import KnowledgeSection from '@/components/_knowledgsection/KnowledgeSection';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <Header></Header>
    <div>
      <Navbar></Navbar>
      {/* Main Banner */}
      <section
    className="relative h-[500px] md:h-[600px] bg-cover bg-center border-4 border-[#93A267] rounded-3xl overflow-hidden"
    style={{
      backgroundImage: 'linear-gradient(to bottom, rgba(0, 255, 0, 0), #93A267)',
    }}
    
  >
    {/* Overlay for darkening the background image */}
    <div className="absolute inset-0 bg-black bg-opacity-20"></div>

    {/* Content */}
    <div className="relative z-10 container mx-auto h-full flex flex-col justify-center text-white px-6">
      {/* Heading and tagline */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4">VIỆT NÔNG</h1>
      <p className="text-xl md:text-2xl">Nông sản của người Việt</p>

      {/* Top 10 months badge */}
      <div className="absolute bottom-8 left-8 bg-white bg-opacity-80 p-4 rounded-lg shadow-md text-black">
        <div className="flex items-center space-x-2">
          <img src="badge-image-url-here" alt="Top 10 tháng" className="w-12 h-12 rounded-full" />
          <div>
            <p className="text-lg font-semibold">Top 10 tháng</p>
            <p className="text-sm">Dựa trên số lượng bán, đánh giá và tỉ lệ phản hồi khách hàng</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>

      {/* News Section */}
     <NewsSection></NewsSection>


     {/* Knowledge Section */}
    <KnowledgeSection></KnowledgeSection>

    </div>
  );
};

export default HomePage;
