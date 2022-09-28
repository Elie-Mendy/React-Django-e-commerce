import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

function NavScrollExample() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>ProShop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to="/home">
              <Nav.Link><i className="fas fa-shopping-cart" /> Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link ><i className="fas fa-user" /> Login</Nav.Link>
            </LinkContainer>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container >
    </Navbar >
  );
}

export default NavScrollExample;