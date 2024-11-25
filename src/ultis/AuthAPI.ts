import apiclient from "./apiclient";
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "@/type/auth"; // Cập nhật đường dẫn nếu cần
import axios from 'axios';


// POST: Đăng nhập người dùng


export const loginUser = async (credentials: LoginRequest): Promise<LoginResponse> => {
    try {
        const response = await apiclient.post<LoginResponse>(
            '/auth/login',
            credentials
        );
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

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

