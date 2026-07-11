import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ProductsList from './components/ProductsList';
import Users_new from './components/Users_new';
import Users3 from './components/Users3';
import Users3_2 from './components/Users3_2';

export default function App() {
  return (
    <>
    <Router>
      <nav style={{ padding: '10px', background: '#eee' }}>
        {/* React Router Links prevent full page reloads */}
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/products" style={{ marginRight: '10px' }}>View Products (PHP Data)</Link>
        <Link to="/users3" style={{ marginRight: '10px' }}>Users3</Link>
        <Link to="/users_new" style={{ marginRight: '10px' }}>Users-New</Link>
        <Link to="/users3_2" style={{ marginRight: '10px' }}>Users3_2</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/users3" element={<Users3 />} />
          <Route path="/users_new" element={<Users_new />} />
          <Route path="/users3_2" element={<Users3_2 />} />
        </Routes>
      </div>
    </Router>
    <div>
    {/* <Users3/> */}
     {/* <Users_new/> */}
    </div>
    </>
  );
}
