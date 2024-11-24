//get all
//https://localhost:7050/odata/product

//post
//https://localhost:7050/odata/product

//get
//https://localhost:7050/odata/product/1

//put
//https://localhost:7050/odata/product/1

//delete
//https://localhost:7050/odata/product/1

//không sử dụng https://localhost:7050/odata 

//sử dụng https://apivietnong-f9a8ecdydsdmebb3.canadacentral-01.azurewebsites.net/odata trong odata client
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
  productImage: string; // Thay vì imageUrl, sử dụng productImage
  createdAt: string; // Ngày tạo
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
