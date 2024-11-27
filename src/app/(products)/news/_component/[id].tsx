// pages/article/[slug].tsx

import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

interface Article {
  title: string;
  publishedAt: string;
  description: string;
  urlToImage: string;
  content: string; // Thêm thuộc tính cho nội dung bài viết
}

interface ArticleDetailProps {
  article: Article | null;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
  if (!article) {
    return <p>No article data available.</p>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-500 mb-2">{new Date(article.publishedAt).toLocaleDateString()}</p>
        <img src={article.urlToImage} alt={article.title} className="w-full h-auto rounded-lg mb-4" />
        <p className="text-lg mb-4">{article.description}</p>
        <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
    </div>
  );
};

// Fetching article data based on slug
export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch your articles here to generate paths
  const res = await fetch('https://newsapi.org/v2/everything?q=agriculture&apiKey=6f7f2261d23643a48779f0aa0c32342c');
  const data = await res.json();

  const paths = data.articles.map((article: Article) => ({
    params: { slug: article.title }, // Sử dụng slug hoặc ID
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://newsapi.org/v2/everything?q=agriculture&apiKey=6f7f2261d23643a48779f0aa0c32342c`);
  const data = await res.json();

  const article = data.articles.find((article: Article) => article.title === params?.slug);

  return {
    props: {
      article: article || null,
    },
  };
};

export default ArticleDetail;