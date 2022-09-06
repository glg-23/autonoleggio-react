import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../media/carlogo.png';

class Header extends React.Component {

    render() {
        return (
            <div className='header'>
                <Navbar className='nav'>
                    <Container>

                        <Navbar.Brand /* href="/home" */ className='elem-left'>
                            <img
                                className='logo'
                                src={logo}
                                width="40"
                                height="40"
                            />

                            <Nav.Link className="navLink" /* href="/home" */>Noleggiovà</Nav.Link>
                        </Navbar.Brand>

                        <div className='elem-right'>
                            <Nav >
                                <div>
                                    <Nav.Link className="navLink" /* href="/login" */>Login</Nav.Link>
                                    <Nav.Link className="navLink" /* href="/listaAuto" */>Auto</Nav.Link>
                                    <Nav.Link className="navLink" /* href="/chiSiamo" */>Chi siamo</Nav.Link>
                                    <Nav.Link className="navLink" /* href="/contatti" */>Contatti</Nav.Link>
                                </div>
                            </Nav>
                        </div>

                    </Container>
                </Navbar>
            </div>
        );
    }

}

export default Header;
