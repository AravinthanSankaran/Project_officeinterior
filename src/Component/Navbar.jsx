import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className='pad'>
        <Navbar.Brand href="#home">BRAND NAME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto Margin">
            <Nav.Link href="#">Menu1</Nav.Link>
            <Nav.Link href="#">Menu2</Nav.Link>
            <Nav.Link href="#">Menu3</Nav.Link>
            <Nav.Link href="#">Menu4
            <i class="fa fa-arrow-right Arrow" aria-hidden="true"></i></Nav.Link>
            <button type="button" class="btn btn-outline-dark Contact">Contact Us
            <i class="fa fa-arrow-right Arrow" aria-hidden="true"></i></button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;