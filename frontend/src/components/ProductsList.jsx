import React, { useState, useEffect } from 'react';

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual PHP container port or Codespaces forwarded URL
    // Codespaces usually maps ports to URLs like: https://YOUR_CODESPACE_ID-8080.app.github.dev/api.php
    fetch('http://localhost:8080/api.php') 
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products from PHP container...</p>;

  return (
    <div>
      <h2>Products Catalog</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong>: {product.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
