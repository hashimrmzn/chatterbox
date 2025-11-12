import React from "react";
import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header shadow-sm">
      <Navbar expand="lg" className="py-3" bg="light" variant="light">
        <Container fluid className="px-4">
          {/* Logo (now clickable) */}
          <Navbar.Brand
            as={Link}
            to="/"
            className="fw-bold text-primary d-flex align-items-center"
            style={{ cursor: "pointer", fontSize: "1.6rem" }}
          >
            💬 ChatterBox
          </Navbar.Brand>

          {/* Toggle for Mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Nav Links */}
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="align-items-center">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/chat">Chat</Nav.Link>

              <div className="d-flex align-items-center ms-4">
                {/* Avatar Placeholder */}
                <Image
                  src="/assets/avatars/user1.png"
                  roundedCircle
                  width="36"
                  height="36"
                  alt="User Avatar"
                />
                <span className="ms-2 fw-semibold">Guest</span>
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="ms-3"
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  className="ms-2"
                >
                  Sign Up
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
