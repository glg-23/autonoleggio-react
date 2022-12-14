import React from 'react';
import './Footer.css';
import facebook from '../../media/social/facebook.ico';
import instagram from '../../media/social/instagram.ico';
import twitter from '../../media/social/twitter.ico';
import telefono from '../../media/social/telefono.png';

class Footer extends React.Component {

    render() {
        return (
            <div className='footer'>
                <div>
                    <h2 style={{fontWeight: "normal", margin:"0"}}>
                        <a href="mailto:noleggiova@gmail.com">
                            <span id="contact-left">noleggiova@gmail.com</span></a>
                    </h2>
                    <h2 style={{fontWeight: "normal", margin:"0"}}>
                        <span id="contact-right">06 1234567</span>
                    </h2>

                    <a href="https://www.facebook.com/Noleggiov%C3%A0-109539884161383/" target="_blank">
                        <img className="footer-logo logo-left" src={facebook}></img></a>

                    <a href="https://instagram.com/noleggiova?igshid=t1fi9ebgre66" target="_blank">
                        <img className="footer-logo logo-left" src={instagram}></img></a>

                    <a href="https://twitter.com/noleggiova" target="_blank">
                        <img className="footer-logo logo-left" src={twitter}></img></a>

                    <img className="footer-logo logo-right" src={telefono}></img>
                </div>
            </div >
        );
    }

}

export default Footer;
