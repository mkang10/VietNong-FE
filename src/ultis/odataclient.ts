// utils/odataClient.ts
import axios, { AxiosInstance } from 'axios';

// Tạo một interface cho cấu trúc dữ liệu (tùy vào API trả về dữ liệu)

// Khởi tạo axios với URL gốc của API
const odataClient: AxiosInstance = axios.create({
  baseURL: 'https://localhost:7050/odata',
  headers: {
    'Content-Type': 'application/json;odata.metadata=minimal;odata.streaming=true',
    Accept: '*/*',
  },
});

// Hàm tương tự cho các endpoint khác
export const getProducts = async (): Promise<any[]> => {
  try {
    const response = await odataClient.get('/product');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export default odataClient;
