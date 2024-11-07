import odataClient from "./odataclient"; 

interface Category {
  categoryId: number;
  categoryName: string;
  description: string;
  image: string;
}

// Đảm bảo axios trả về một mảng các đối tượng Category
export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await odataClient.get<Category[]>('/category');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Error fetching categories');
  }
};
