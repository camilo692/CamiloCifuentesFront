"use client";
import React, { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import productService from "../../services/productService";
import ProductDetail from "./ProductDetail";
import "./Productos.css";

export default function ProductList() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const detalleRef = useRef(null);

  useEffect(() => {
    loadInitialData();
  }, []);

  useEffect(() => {
    if (productoSeleccionado && detalleRef.current) {
      detalleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [productoSeleccionado]);

  const loadInitialData = async () => {
    try {
      setLoading(true);
      setError(null);
      const [categoriasData, productosData] = await Promise.all([
        productService.getCategories(),
        productService.getProducts()
      ]);
      setCategorias(categoriasData);
      setCategoriaSeleccionada("");
      setProductos(productosData);
    } catch (err) {
      setError('Error al cargar los productos. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleCategoriaChange = async (categoriaId) => {
    try {
      setProductoSeleccionado(null); // Cierra el detalle al cambiar de categoría
      setCategoriaSeleccionada(categoriaId);
      setLoading(true);
      setProductos([]);
      if (!categoriaId) {
        const todosLosProductos = await productService.getProducts();
        setProductos(todosLosProductos);
      } else {
        const productosFiltrados = await productService.getProductsByCategory(categoriaId);
        setProductos(productosFiltrados);
      }
    } catch (err) {
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
        <button
          className={`categoria-btn${!categoriaSeleccionada ? " selected" : ""}`}
          onClick={() => handleCategoriaChange("")}
          disabled={!categoriaSeleccionada || loading}
        >
          Todas las categorías
        </button>
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
      {productoSeleccionado && (
        <div className="product-detail-top" ref={detalleRef}>
          <ProductDetail
            producto={productoSeleccionado}
            onClose={() => setProductoSeleccionado(null)}
          />
        </div>
      )}
      <div className="productos-grid">
        {!loading && productos.map((producto) => (
          <ProductCard
            key={producto._id || producto.id}
            producto={producto}
            onClick={() => setProductoSeleccionado(producto)}
          />
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