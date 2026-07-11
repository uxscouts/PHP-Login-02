import React, { useState } from "react";
// 1. Import NavLink from react-router-dom as RRNavLink to avoid naming conflicts with Reactstrap
import { BrowserRouter as Router, Routes, Route, NavLink as RRNavLink } from "react-router-dom";
import Home from "./components/Home";
import ProductsList from "./components/ProductsList";
import Users_new from "./components/Users_new";
import Users3 from "./components/Users3";
import Users3_2 from "./components/Users3_2";
import Dashboard from "./components/Dashboard";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  // 2. Helper function to close the mobile menu automatically when a link is clicked
  const closeMenu = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <Router>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={RRNavLink} to="/" onClick={closeMenu}>MyApp</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              {/* 3. Pass RRNavLink as the tag, and add onClick={closeMenu} */}
              <NavLink 
                tag={RRNavLink} 
                to="/" 
                onClick={closeMenu}
                // React Router automatically injects an `isActive` boolean
                className={({ isActive }) => isActive ? "active fw-bold" : ""}
              >
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink 
                tag={RRNavLink} 
                to="/products" 
                onClick={closeMenu}
                className={({ isActive }) => isActive ? "active fw-bold" : ""}
              >
                Products
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink 
                tag={RRNavLink} 
                to="/users3" 
                onClick={closeMenu}
                className={({ isActive }) => isActive ? "active fw-bold" : ""}
              >
                Users3
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink 
                tag={RRNavLink} 
                to="/users_new" 
                onClick={closeMenu}
                className={({ isActive }) => isActive ? "active fw-bold" : ""}
              >
                Users-New
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink 
                tag={RRNavLink} 
                to="/users3_2" 
                onClick={closeMenu}
                className={({ isActive }) => isActive ? "active fw-bold" : ""}
              >
                Users3_2
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/users3" element={<Users3 />} />
          <Route path="/users_new" element={<Users_new />} />
          <Route path="/users3_2" element={<Users3_2 />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
