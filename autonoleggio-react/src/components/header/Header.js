import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../media/logoNoleggiova-black.png';
import logoHover from '../../media/logoNoleggiova-orange.png';


class Header extends React.Component {

    render() {
        return (
            <div className='header'>
                <Navbar>
                    <Container>
                        <Navbar.Brand href="/home" className='elem-left'>
                            <img
                                className='logo'
                                src={logo}
                                onMouseOver={e => e.currentTarget.src = logoHover}
                                onMouseOut={e => e.currentTarget.src = logo}
                            />

                            <Nav.Link className="navLink navLink-left" href="/home" >Noleggiovà</Nav.Link>
                        </Navbar.Brand>

                        <div className='elem-right'>
                            <Nav >
                                <div>
                                    <Nav.Link className="navLink navLink-right" href="/login" >Login</Nav.Link>
                                    <Nav.Link className="navLink navLink-right" href="/listaAuto" >Auto</Nav.Link>
                                    <Nav.Link className="navLink navLink-right" href="/chiSiamo" >Chi siamo</Nav.Link>
                                    <Nav.Link className="navLink navLink-right" href="/contatti" >Contatti</Nav.Link>
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
