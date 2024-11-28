"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface Article {
  title: string;
  publishedAt: string;
  description: string;
  urlToImage: string;
  url: string; // Thêm thuộc tính url
}

const NewsListhomepage: React.FC = () => {
  const [newsData, setNewsData] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=agriculture&apiKey=6f7f2261d23643a48779f0aa0c32342c&pageSize=10&sortBy=popularity`);
        setNewsData(response.data.articles);
      } catch (error) {
        setError('Error loading news articles');
        console.error('Error loading news articles:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="bg-gray-50 p-4">
      {/* Error handling */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Swiper for news articles */}
      <Swiper
        spaceBetween={20}
        slidesPerView={2} // Hiển thị 2 item mỗi slide
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3, // Có thể thay đổi số lượng item trên các màn hình lớn hơn
          },
        }}
      >
        {newsData.length > 0 ? (
          newsData.map((news) => (
            <SwiperSlide key={news.title}>
              <a href={news.url} target="_blank" rel="noopener noreferrer" className="block relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-[400px]">
                <img
                  src={news.urlToImage || "https://via.placeholder.com/600x400"}
                  alt={news.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#93A267] text-white px-3 py-1 rounded-lg">
                  Top 10 tháng
                </div>
                <div className="p-6 flex flex-col justify-between h-full">
                  <h3 className="text-2xl font-bold text-[#93A267] mb-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4 truncate">
                    {news.description}
                  </p>
                  <span className="text-[#93A267]">Đọc tiếp</span>
                </div>
              </a>
            </SwiperSlide>
          ))
        ) : (
          <p>No news articles available</p>
        )}
      </Swiper>
    </div>
  );
};

export default NewsListhomepage;