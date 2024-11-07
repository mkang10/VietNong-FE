import apiclient from "./apiclient";

interface LoginRequest {
  username: string;
  password: string;
}


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

interface LoginResponse {
  // Xác định kiểu dữ liệu phản hồi từ API, ví dụ như token nếu có
  token: string;
  // Thêm các trường khác nếu có
}

// POST: Đăng nhập người dùng
export const loginUser = async (credentials: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await apiclient.post<LoginResponse>('/auth/login', credentials);
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

