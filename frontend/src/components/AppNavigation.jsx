import React from 'react';
import { Routes, Route, NavLink as RouterNavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink, Container } from 'reactstrap';

// 1. Import your custom components
import HomeContent from './HomeContent';
import ProfileContent from './ProfileContent';
import SettingsContent from './SettingsContent';
import Users2Content from './Users2';

function AppNavigation() {
  return (
    <div>
      {/* 2. The Styled Navigation Bar */}
      <Navbar color="light" light expand="md">
        <Nav className="me-auto" navbar>
          <NavItem>
            {/* The magic happens here: tag={RouterNavLink} to="..." */}
            <NavLink tag={RouterNavLink} to="/home">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterNavLink} to="/profile">
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RouterNavLink} to="/settings">
              Settings
            </NavLink>
          </NavItem>
           <NavItem>
            <NavLink tag={RouterNavLink} to="/users2">
              Users2
            </NavLink>
          </NavItem>         
        </Nav>
      </Navbar>

      {/* 3. The Content Area that swaps components based on URL */}
      <Container className="mt-4">
        <Routes>
          <Route path="/home" element={<HomeContent />} />
          <Route path="/profile" element={<ProfileContent />} />
          <Route path="/settings" element={<SettingsContent />} />
          <Route path="/users2" element={<Users2Content />} />
          {/* Fallback route */}
          <Route path="*" element={<HomeContent />} />
        </Routes>
      </Container>
    </div>
  );
}

export default AppNavigation;
