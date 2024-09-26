import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavbarItem from 'react-bootstrap/Navbar';

export default function Navbar() {
    return (
        <NavbarItem expand="lg" className="bg-body-tertiary">
            <Container>
                <img className='mx-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb9m3CZmuzIUBqrQjNoJNRgnVIMLcbOj0ZQg&s" alt="Bootstrap" width="60" height="50" />
                <NavbarItem.Brand href="/">News 23x7</NavbarItem.Brand>
                <NavbarItem.Toggle aria-controls="basic-navbar-nav" />
                <NavbarItem.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </NavbarItem.Collapse>
            </Container>
        </NavbarItem>
    )
}
