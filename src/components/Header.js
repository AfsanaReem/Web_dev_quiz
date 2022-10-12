import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>Web Dev Quiz</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                            <Nav.Link as={Link} to={'/topics'}>Quiz Topics</Nav.Link>
                            <Nav.Link as={Link} to={'/statistics'}>Chart</Nav.Link>
                            <Nav.Link as={Link} to={'/blog'}>Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;