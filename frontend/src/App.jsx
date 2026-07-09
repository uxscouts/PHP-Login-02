import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Users3 from './components/Users3';
import Users2 from './components/Users2';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';


const Home = () => <h2>🏠 Home Page</h2>;
const About = () => <h2>ℹ️ About Page</h2>;

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
     <Router>
        <Navbar color="light" light expand="md" className="px-3 shadow-sm">
          <NavbarBrand href="/">MyBrand</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/users3">Users3</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </Router>
    <div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users3" element={<Users3 />} />
          </Routes>
        </div>
    </div>
  </>
  );
}




function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
    <Router>
      <div>
        <Navbar color="light" light expand="md" className="px-3 shadow-sm">
          <NavbarBrand href="/">MyBrand</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
           <NavItem>
           <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
           <NavLink href="/about">About</NavLink>
          </NavItem>
           <NavItem>
          <NavLink href="/users2">Users2</NavLink>
          </NavItem>
          </Nav>
          </Collapse>
        </Navbar>
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
