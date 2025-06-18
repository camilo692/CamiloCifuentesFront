import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./Productos.css";

const mockProductos = [
  {
    id: 1,
    nombre: "Hoodie Mi Niño",
    precio: "100.000",
    genero: "unisex",
    categoria: "Categoria 1",
    etiqueta: "nuevo",
  },{
    id: 5,
    nombre: "Hoodie Mi Niños",
    precio: "100.000",
    genero: "unisex",
    categoria: "Categoria 1",
    etiqueta: "nuevo",
  },
  {
    id: 2,
    nombre: "Hoodie Mi Niño",
    precio: "100.000",
    genero: "unisex",
    categoria: "Categoria 2",
    etiqueta: "nuevo",
  },
  {
    id: 3,
    nombre: "Hoodie Mi Niño",
    precio: "100.000",
    genero: "unisex",
    categoria: "Categoria 3",
    etiqueta: "nuevo",
  },
  {
    id: 4,
    nombre: "Hoodie Mi Niño",
    precio: "100.000",
    genero: "unisex",
    categoria: "Categoria 1",
    etiqueta: "nuevo",
  },
];

const categorias = ["Categoria 1", "Categoria 2", "Categoria 3"];

export default function ProductList() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(categorias[0]);

  const productosFiltrados = mockProductos.filter(
    (p) => p.categoria === categoriaSeleccionada
  );

  return (
    <div>
      <div className="categorias-filtros">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`categoria-btn${cat === categoriaSeleccionada ? " selected" : ""}`}
            onClick={() => setCategoriaSeleccionada(cat)}
            disabled={cat === categoriaSeleccionada}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="productos-grid">
        {productosFiltrados.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
} 