import odataClient from "./odataclient";

interface Category {
    id: number;
    name: string;
    // Các trường khác nếu có
  }
  

export const getCategories = async (): Promise<Category[]> => {
    try {
      const response = await odataClient.get<{ value: Category[] }>('/category');
      return response.data.value; // `.value` theo chuẩn OData
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  };