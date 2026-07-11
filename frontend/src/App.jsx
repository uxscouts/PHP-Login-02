import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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

  return (
    <Router>
      {/* Added light/expand props for clean styling and responsiveness */}
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">MyApp</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        
        {/* Your Nav must go INSIDE the Collapse component so it hides on mobile */}
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              {/* This replaces the nested <a> tags with one single, styled link */}
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/products">
                Products
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/users3">
                Users3
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/users_new">
                Users-New
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/users3_2">
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
