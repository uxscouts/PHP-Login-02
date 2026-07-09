import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ProductsList from './components/ProductsList';

export default function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#eee' }}>
        {/* React Router Links prevent full page reloads */}
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/products">View Products (PHP Data)</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
        </Routes>
      </div>
    </Router>
  );
}
