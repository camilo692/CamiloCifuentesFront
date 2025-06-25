const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://camilocifuentesback.onrender.com/api';

class ProductService {
  async getProducts() {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  async getProductsByCategory(categoryId) {
    try {
      console.log('Enviando petición para categoría ID:', categoryId);
      const url = `${API_BASE_URL}/products/category/${categoryId}`;
      console.log('URL de la petición:', url);
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Productos recibidos para categoría', categoryId, ':', data.length);
      return data;
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw error;
    }
  }

  async getProductById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching product by id:', error);
      throw error;
    }
  }

  async getCategories() {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Categorías cargadas:', data.map(cat => ({ id: cat._id, name: cat.name })));
      return data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }
}

export default new ProductService(); 