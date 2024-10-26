import React from 'react';
import './all.css';
import Sidebar from '@/layout/_component/Sidebar/sidebar';

const All = () => {
    return (
        <div className="seller-dashboard">
           
            <Sidebar></Sidebar>
            <main className="content">
                <header className="top-bar">
                    <input type="text" placeholder="Tìm kiếm" className="search-bar" />

                </header>

                <section className="product-list">
                    <div className="filter-buttons">
                        <button className="btn btn-active">Tất cả</button>
                        <button className="btn">Còn hàng</button>
                        <button className="btn">Hết hàng</button>
                    </div>

                    <table className="product-table">
                        <thead>
                            <tr>
                                <th>Tên sản phẩm</th>
                                <th>Phân loại hàng</th>
                                <th>Giá</th>
                                <th>Kho hàng</th>
                                <th>Thông tin</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="product-name">
                                    <img
                                        src="https://via.placeholder.com/100"
                                        alt="product"
                                        className="product-image"
                                    />
                                    <span>Tổng Hợp Các Loại Hạt giống Dây...</span>
                                </td>
                                <td>
                                    <ul>
                                        <li>Dưa chuột</li>
                                        <li>Bí đỏ</li>
                                        <li>Rau cải</li>
                                        <li>Carot</li>
                                        <li>Cà chua</li>
                                        <li>Dưa hấu</li>
                                    </ul>
                                </td>
                                <td>đ 10.000</td>
                                <td>50</td>
                                <td><a href="/edit">Sửa</a></td>
                            </tr>
                            <tr>
                                <td className="product-name">
                                    <img
                                        src="https://via.placeholder.com/100"
                                        alt="product"
                                        className="product-image"
                                    />
                                    <span>Tổng Hợp Các Loại Hạt giống Dây...</span>
                                </td>
                                <td>-</td>
                                <td>đ 10.000</td>
                                <td>50</td>
                                <td><a href="/edit">Sửa</a></td>
                            </tr>
                            <tr>
                                <td className="product-name">
                                    <img
                                        src="https://via.placeholder.com/100"
                                        alt="product"
                                        className="product-image"
                                    />
                                    <span>Tổng Hợp Các Loại Hạt giống Dây...</span>
                                </td>
                                <td>-</td>
                                <td>đ 10.000</td>
                                <td>0</td>
                                <td><a href="/edit">Sửa</a></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
};

export default All
