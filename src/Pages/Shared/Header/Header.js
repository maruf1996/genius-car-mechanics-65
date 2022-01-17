import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const {user,logOut}=useAuth();
    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="#home">Genius Mechanics</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
            <Nav.Link as={HashLink} to="/home#exparts">Exparts</Nav.Link>
            {user?.email?
               <Button variant="light mx-2" onClick={logOut}>Log Out</Button>:
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
            }
            <Navbar.Text>
                 Signed in as: <a href="#login" style={{textDecoration:"none"}}> {user?.displayName}</a>
            </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default Header;