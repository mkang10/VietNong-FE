import React from "react";
import { Button, Carousel } from 'antd';
import { SearchOutlined, BellOutlined, QuestionCircleOutlined } from '@ant-design/icons';

const Header = () => {
    return (
        <header className="bg-[#93A267] text-white py-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section - Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/path-to-logo.png" // Replace with your logo path
            alt="Việt Nông"
            className="w-16 h-auto"
          />
          <div className="text-sm">
            <a href="#" className="hover:underline">
              Trở thành người bán
            </a>{' '}
            |{' '}
            <a href="#" className="hover:underline">
              Tải ứng dụng
            </a>
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
          <Button type="link" className="text-white">
            Đăng ký
          </Button>
          <Button type="link" className="text-white">
            Đăng nhập
          </Button>
        </div>
      </div>
    </header>
       
    )
}

export default Header;

