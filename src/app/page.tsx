import React from 'react';
import { Button, Carousel } from 'antd';
import { SearchOutlined, BellOutlined, QuestionCircleOutlined } from '@ant-design/icons';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
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
    <div>
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
      <section className="py-12 bg-white">
  <div className="container mx-auto">
    {/* Header */}
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


     {/* Knowledge Section */}
<section className="py-12 bg-white">
  <div className="container mx-auto">
    {/* Title */}
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-[#566544]">Cẩm nang nông nghiệp</h2>
      <p className="text-gray-600 mt-2">Cẩm nang nông nghiệp là một tài liệu hoặc tập hợp các hướng dẫn chi tiết, cung cấp thông tin chuyên sâu.</p>
    </div>

    {/* Knowledge Cards */}
    <div className="space-y-4">
      {/* First Item */}
      <div className="bg-white border-2 border-[#566544] rounded-xl p-6 flex justify-between items-center transition hover:bg-[#F2F3EB]">
        <h3 className="text-xl font-semibold text-[#566544]">Kiến thức nông nghiệp</h3>
        <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#566544] text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Second Item */}
      <div className="bg-white border-2 border-[#566544] rounded-xl p-6 flex justify-between items-center transition hover:bg-[#F2F3EB]">
        <h3 className="text-xl font-semibold text-[#566544]">Chứng nhận nông nghiệp</h3>
        <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#566544] text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Third Item */}
      <div className="bg-white border-2 border-[#566544] rounded-xl p-6 flex justify-between items-center transition hover:bg-[#F2F3EB]">
        <h3 className="text-xl font-semibold text-[#566544]">Chính sách nhà nước</h3>
        <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#566544] text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default HomePage;
