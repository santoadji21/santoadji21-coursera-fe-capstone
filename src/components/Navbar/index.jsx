import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

/**
 *
 * @Author: Ahmad Aji Santoso
 * @github: santoadji21
 */
function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
        <Navbar.Brand href="#home">Little Lemon App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link href="#deets">Menu</Nav.Link>
            <Nav.Link href="#deets">Reservations</Nav.Link>
            <Nav.Link href="#deets">Order Online</Nav.Link>
            <Nav.Link href="#deets">Login</Nav.Link>
     
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
