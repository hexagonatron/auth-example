import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

export const CustomNavbar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
          <Nav.Link as={Link} to={"#"}>
            Login
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
