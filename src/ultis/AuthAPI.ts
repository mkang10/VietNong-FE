import apiclient from "./apiclient";
import { LoginRequest, LoginResponse } from "@/type/auth"; // Cập nhật đường dẫn nếu cần
import axios from 'axios';



interface RegisterRequest {
  username: string;
  roleId: number;
  status: boolean;
  email: string;
  password: string;
}

interface RegisterResponse {
  // Định nghĩa các trường nhận được từ API sau khi đăng ký thành công
  userId: number;
  username: string;
  email: string;
  // Thêm các trường khác nếu có
}


// POST: Đăng nhập người dùng


export const loginUser = async (credentials: LoginRequest): Promise<LoginResponse> => {
    try {
        const response = await axios.post<LoginResponse>(
            'https://apivietnong-f9a8ecdydsdmebb3.canadacentral-01.azurewebsites.net/api/auth/login',
            credentials
        );
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};
// export const loginUser = async (credentials: LoginRequest): Promise<LoginResponse> => {
//   try {
//       const response = await axios.post<LoginResponse>('/auth/login', credentials);
//       return response.data; // Đây phải là LoginResponse
//   } catch (error) {
//       console.error('Error logging in:', error);
//       throw error;
//   }
// };

// POST: Đăng ký người dùng mới
export const registerUser = async (registrationData: RegisterRequest): Promise<RegisterResponse> => {
  try {
    const response = await apiclient.post<RegisterResponse>('/auth/register', registrationData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

