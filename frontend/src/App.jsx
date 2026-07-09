import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Users2 from './components/Users2';
import { Button } from 'reactstrap';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


const Home = () => <h2>🏠 Home Page</h2>;
const About = () => <h2>ℹ️ About Page</h2>;


function App() {
  return (
    <>
    <div className="container mt-5">
      <Button color="primary">Click Me</Button>
    </div>
    <Router>
      <div>
        <nav>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users2">Users2</Link>
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users2" element={<Users2 />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
