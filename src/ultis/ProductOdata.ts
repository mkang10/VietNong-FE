
import odataClient from "./odataclient"; 

interface Product {
  productId: number;
  name: string;
  categoryId: number;
  price: number;
  weight: number;
  description: string;
  stockQuantity: number;
  averageRating: number;
  reviewCount: number;
  productImage: string; 
  createdAt: string; // Ngày tạo
}

interface SellerProduct {
  productId: number;
  name: string;
  categoryId: number;
  price: number;
  stockQuantity: number;
  productImage: string;
}


export const getProducts = async (page: number, pageSize: number): Promise<{ data: Product[]; totalCount: number }> => {
  try {
    const response = await odataClient.get(`/product?page=${page}&pageSize=${pageSize}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Error fetching products');
  }
};
export const getProductById = async (productId: number): Promise<Product> => {
  try {
    const response = await odataClient.get(`/product/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by id:', error);
    throw new Error('Error fetching product by id');
  }
};
export const postProduct = async (productData: FormData): Promise<any> => {
  try {
    const response = await odataClient.post('/product', productData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Hỗ trợ gửi dữ liệu file
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error posting product:', error);
    throw new Error('Error posting product');
  }
};
export const getSellerProducts = async () => {
  try {
    const response = await odataClient.get('/product/seller-products');
    console.log('API Response:', response); // Kiểm tra cấu trúc dữ liệu trả về
    // Kiểm tra nếu response.data có trường 'data' và là một mảng
    return Array.isArray(response.data.data) ? response.data.data : []; // Nếu có, trả về mảng sản phẩm
  } catch (error) {
    console.error('Error fetching seller products:', error);
    return []; // Trả về mảng rỗng nếu có lỗi
  }
};
export const putProduct = async (productId: number, productData: SellerProduct): Promise<SellerProduct> => {
  try {
    const response = await odataClient.put(`/product/${productId}`, productData);
    return response.data;  // Giả sử API trả lại dữ liệu đã cập nhật
  } catch (error) {
    console.error('Error updating product:', error);
    throw new Error('Error updating product');
  }
};

