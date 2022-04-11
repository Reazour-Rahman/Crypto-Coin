import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

const Dashboard = () => {
  return (
    <div>
      <Navbar bg="light" expand={false} >
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>

          <Navbar.Offcanvas backdrop={false}
            style={{ width: "200px" }}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Banner</Nav.Link>
                <Nav.Link href="#action2">About Coin</Nav.Link>
                <Nav.Link href="#action2">Wallets</Nav.Link>
                <Nav.Link href="#action2">Start Guide</Nav.Link>
                <Nav.Link href="#action2">Community</Nav.Link>
                <Nav.Link href="#action2">Transactions</Nav.Link>
                <Nav.Link href="#action2">Footer</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Dashboard;
