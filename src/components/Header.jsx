import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style/header.css';

const Header = () => {

    //estado para cambiar de flechas
    const [open, setOpen] = useState(false);

    const handleClick = () =>{
        if( open === false){   //si esta cerrado es true
            setOpen(true)
        }else{
            setOpen(false)    //si esta abierto es false
        }
    }

    return (
        <Navbar expand="lg" className="navbar-dark">
        <Container>
            <Navbar.Brand href="#home" className="d-flex flex-direction-row">
                <h3 className="font-weight-bold">Luis</h3><h3 className="grey"> Robertazzi</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">CV</Nav.Link>
                <NavDropdown title="Proyectos" id="basic-nav-dropdown" onClick={handleClick}>
                    <NavDropdown.Item href="#action/3.1">Fotografia</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">3D</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Videos</NavDropdown.Item>
                </NavDropdown>
                <div>
                    {
                    open ?
                        <div className="dropdown-toggle-up"></div>   //si se abre es true: flecha para arriba
                        :
                        <div className="dropdown-toggle-down"></div>  //si se cierra false: flecha para abajo
                    }
                </div>
                <Nav.Link href="#link">Contacto</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default Header;
