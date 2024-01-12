import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom'; 

function Navbox() {
  return (
    <Navbar  fixed="top" data-bs-theme="light" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" >
        <svg xmlns="http://www.w3.org/2000/svg"  width="40" height="40"  fill="currentColor" class="bi bi-code-slash" viewBox="0 0 18 18">
  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
</svg>Shreya Porwal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center me-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/About">About</Link>
            <Link className='nav-link' to="/Projects">Projects</Link>
            <Link className='nav-link' to="/Contact">Contact Me</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbox;
