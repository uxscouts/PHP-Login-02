import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ProductsList from './components/ProductsList';
import Users_new from './components/Users_new';
import Users3 from './components/Users3';
import Users3_2 from './components/Users3_2';
import Dashboard from './components/Dashboard';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    <Router>
      <Navbar color="dark" dark expand="md">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/users3">Users3</Link>
          <Link to="/users_new">Users-New</Link>
          <Link to="/users3_2">Users3_2</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </Navbar>

      <div style={{ padding: '20px' }}>
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

    <div>
      <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand href="/">MyApp</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>




    </>
  );
}
