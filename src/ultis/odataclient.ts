// utils/odataClient.ts
import axios, { AxiosInstance } from 'axios';

// Tạo một interface cho cấu trúc dữ liệu (tùy vào API trả về dữ liệu)

// Khởi tạo axios với URL gốc của API
const odataClient: AxiosInstance = axios.create({
  baseURL: 'https://apivietnong-f9a8ecdydsdmebb3.canadacentral-01.azurewebsites.net/odata',
  headers: {
    'Content-Type': 'application/json;odata.metadata=minimal;odata.streaming=true',
    Accept: '*/*',
  },
});

export default odataClient;
