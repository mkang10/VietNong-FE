import React from "react";
import Header from "@/layout/_component/Header/Header";
import Navbar from "@/layout/_component/Header/navbar/Navbar";

type CartItemProps = {
  name: string;
  price: number;
  quantity: number;
};

type ProductCardProps = {
  name: string;
  price: number;
  imageUrl: string;
};

const CartItem: React.FC<CartItemProps> = ({ name, price, quantity }) => (
  <div className="flex items-center justify-between p-4 border-b">
    <div className="flex items-center">
      <input type="checkbox" className="mr-4" />
      <span>{name}</span>
    </div>
    <div className="flex items-center">
      <span className="mr-4">${price}</span>
      <input type="number" value={quantity} className="w-12 border text-center" />
      <button className="ml-4 text-red-500">Xóa</button>
    </div>
  </div>
);

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => (
  <div className="border p-4 rounded shadow-sm">
    <img src={imageUrl} alt={name} className="w-full h-32 object-cover mb-2" />
    <h4 className="font-bold">{name}</h4>
    <p className="text-gray-700">${price}</p>
    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Thêm vào giỏ</button>
  </div>
);

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Hạt Giống Nông Sản Vàng", price: 45.5, quantity: 10 },
    // Add more items as needed
  ];

  const suggestedProducts = [
    { id: 1, name: "Sản Phẩm 1", price: 20, imageUrl: "https://via.placeholder.com/150" },
    { id: 2, name: "Sản Phẩm 2", price: 30, imageUrl: "https://via.placeholder.com/150" },
    // Add more products as needed
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex items-center justify-between p-4 bg-white shadow-md">
          <input type="checkbox" />
          <span>Sản phẩm</span>
          <span>Đơn giá</span>
          <span>Số lượng</span>
          <span>Số tiền</span>
          <span>Thao tác</span>
        </div>
        <h2 className="text-xl font-bold mt-4">Giỏ hàng của bạn</h2>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="flex justify-between items-center mt-4">
          <button className="text-red-500">Chọn Tất Cả</button>
          <div>
            <span className="mr-4">Tổng thanh toán:</span>
            <span className="font-bold text-lg">$110.00</span>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Mua Hàng</button>
        </div>

        <h3 className="text-lg font-bold mt-8">Có thể bạn sẽ thích</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          {suggestedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;