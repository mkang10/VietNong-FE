// utils/odataClient.ts
import axios, { AxiosInstance } from 'axios';


// Khởi tạo axios với URL gốc của API
const apiclient: AxiosInstance = axios.create({
  baseURL: 'https://apivietnong-f9a8ecdydsdmebb3.canadacentral-01.azurewebsites.net/api',
  headers: {
    'Content-Type': 'application/json;odata.metadata=minimal;odata.streaming=true',
    Accept: '*/*',
  },
});

export default apiclient;
