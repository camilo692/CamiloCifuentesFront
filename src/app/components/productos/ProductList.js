import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import productService from "../../services/productService";
import "./Productos.css";

export default function ProductList() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Cargar categorías y productos en paralelo
      const [categoriasData, productosData] = await Promise.all([
        productService.getCategories(),
        productService.getProducts()
      ]);
      
      setCategorias(categoriasData);
      setProductos(productosData);
      
      // Seleccionar la primera categoría por defecto
      if (categoriasData.length > 0) {
        setCategoriaSeleccionada(categoriasData[0]._id);
      }
    } catch (err) {
      console.error('Error loading data:', err);
      setError('Error al cargar los productos. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleCategoriaChange = async (categoriaId) => {
    try {
      setCategoriaSeleccionada(categoriaId);
      setLoading(true);
      
      const productosFiltrados = await productService.getProductsByCategory(categoriaId);
      setProductos(productosFiltrados);
    } catch (err) {
      console.error('Error filtering products:', err);
      setError('Error al filtrar los productos. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  if (loading && productos.length === 0) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Cargando productos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button onClick={loadInitialData} className="retry-button">
          Intentar de nuevo
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="categorias-filtros">
        {categorias.map((categoria) => (
          <button
            key={categoria._id}
            className={`categoria-btn${categoria._id === categoriaSeleccionada ? " selected" : ""}`}
            onClick={() => handleCategoriaChange(categoria._id)}
            disabled={categoria._id === categoriaSeleccionada || loading}
          >
            {categoria.name}
          </button>
        ))}
      </div>
      
      {loading && (
        <div className="loading-container">
          <div className="loading-spinner">Cargando...</div>
        </div>
      )}
      
      <div className="productos-grid">
        {productos.map((producto) => (
          <ProductCard key={producto._id || producto.id} producto={producto} />
        ))}
      </div>
      
      {!loading && productos.length === 0 && (
        <div className="no-products">
          <p>No se encontraron productos en esta categoría.</p>
        </div>
      )}
    </div>
  );
} 