import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

export const CustomNavbar = () => {
  const location = useLocation();
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  console.log({ user, isAuthenticated });
  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={"/"}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={"/about"}>
            About
          </Nav.Link>
          <Nav.Link as={Link} to={"/profile"}>
            Profile
          </Nav.Link>
        </Nav>
        <Nav>
          {!isAuthenticated ? (
            <Nav.Link onClick={() => loginWithRedirect()}>Login</Nav.Link>
          ) : (
            <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
          )}
        </Nav>
      </Navbar>
    </>
  );
};
