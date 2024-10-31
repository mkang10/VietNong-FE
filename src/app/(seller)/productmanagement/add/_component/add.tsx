// Thêm "use client"; ở đầu file
"use client";
import './add.css';

import { useState } from 'react';

export default function Add() {
    const [productName, setProductName] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [categories, setCategories] = useState([{ name: '', price: '', quantity: '' }]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [description, setDescription] = useState('');

    const handleAddCategory = () => {
        setCategories([...categories, { name: '', price: '', quantity: '' }]);
    };

    const handleCategoryChange = (index, field, value) => {
        const newCategories = [...categories];
        newCategories[index][field] = value;
        setCategories(newCategories);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({
            productName,
            productImage,
            categories,
            selectedCategory,
            description,
        });
    };

    return (
             <div className="add-product">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Tên sản phẩm</label>
                    <input
                        type="text"
                        placeholder="Tên sản phẩm"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Hình ảnh</label>
                    <input
                        type="file"
                        onChange={(e) => setProductImage(e.target.files[0])}
                    />
                </div>

                <div className="form-group">
                    <label>Phân loại</label>
                    {categories.map((category, index) => (
                        <div key={index} className="category-row">
                            <input
                                type="text"
                                placeholder="Tên"
                                value={category.name}
                                onChange={(e) => handleCategoryChange(index, 'name', e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="Giá"
                                value={category.price}
                                onChange={(e) => handleCategoryChange(index, 'price', e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="Số lượng"
                                value={category.quantity}
                                onChange={(e) => handleCategoryChange(index, 'quantity', e.target.value)}
                            />
                        </div>
                    ))}
                    <button type="button" onClick={handleAddCategory} className="add-category">
                        + Thêm phân loại
                    </button>
                </div>

                <div className="form-group">
                    <label>Phân loại</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">Chọn phân loại</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Mô tả</label>
                    <textarea
                        placeholder="Mô tả sản phẩm"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <button type="submit" className="submit-button">
                    Thêm sản phẩm
                </button>
            </form>
        </div>
       
    );
}
