import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" className='navbar'>
                <Link to={'/'}>
                    <Navbar.Brand as="span">Acrux</Navbar.Brand>
                </Link>
                <Nav className="me-auto">
                    <Link to={'/'}>
                        <Nav.Link as="span">Home</Nav.Link>
                    </Link>
                    <Link to={'/concerts'}>
                        <Nav.Link as="span">Concerts</Nav.Link>
                    </Link>
                </Nav>
            </Navbar >
        </>
    )
}

export default NavBar