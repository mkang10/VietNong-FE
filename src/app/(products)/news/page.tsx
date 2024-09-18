import React from 'react';
import Header from '@/layout/_component/Header/Header';
import Navbar from '@/layout/_component/Header/navbar/Navbar';
import KnowledgeSection from '@/components/_knowledgsection/KnowledgeSection';
import NewsSection from '@/components/_newssection/NewsSection';
import HeaderNews from '@/components/_newssection/_component/HeaderNews';

const page: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <Header></Header>
        <div>
      <Navbar></Navbar>
      </div>
      <HeaderNews></HeaderNews>

    </div>
  );
};

export default page;
