import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];
const Products = () => {
  return (
    <>
      <h1>My Products page </h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.title}</Link>
          </li>
        ))}
        <p>Go to <Link to='..'>Home</Link>.</p>
      </ul>
    </>
  );
};

export default Products;
