import React from "react";


const Navbar = () => {
    return (
        <nav className="flex justify-center items-center space-x-8 py-4 bg-white shadow-md">
        <a
          href="#home"
          className="text-lg font-semibold text-gray-700 hover:text-[#93A267] border-b-4 border-transparent hover:border-[#93A267] pb-2 transition duration-300"
        >
          Trang chủ
        </a>
        <a
          href="#news"
          className="text-lg font-semibold text-gray-500 hover:text-[#93A267] border-b-4 border-transparent hover:border-[#93A267] pb-2 transition duration-300"
        >
          Tin tức
        </a>
        <a
          href="#handbook"
          className="text-lg font-semibold text-gray-500 hover:text-[#93A267] border-b-4 border-transparent hover:border-[#93A267] pb-2 transition duration-300"
        >
          Cẩm nang
        </a>
        <a
          href="#market"
          className="text-lg font-semibold text-gray-500 hover:text-[#93A267] border-b-4 border-transparent hover:border-[#93A267] pb-2 transition duration-300"
        >
          Chợ
        </a>
        <a
          href="#cart"
          className="text-lg font-semibold text-gray-500 hover:text-[#93A267] border-b-4 border-transparent hover:border-[#93A267] pb-2 transition duration-300"
        >
          Giỏ hàng
        </a>
      </nav>
    
    )
}

export default Navbar;


