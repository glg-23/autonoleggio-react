import React from 'react';
import './Footer.css';
import facebook from '../../media/facebook.ico';
import instagram from '../../media/instagram.ico';
import twitter from '../../media/twitter.ico';

class Footer extends React.Component {

    render() {
        return (
            <div className='footer'>
                <h2>
                    <a href="mailto:noleggiova@gmail.com">
                        <span id="contact-left">noleggiovà@gmail.com</span></a>
                </h2>

                <div>
                    <a href="https://www.facebook.com/Noleggiov%C3%A0-109539884161383/" target="_blank">
                        <img className="footer-logo" src={facebook}></img></a>

                    <a href="https://instagram.com/noleggiova?igshid=t1fi9ebgre66" target="_blank">
                        <img className="footer-logo" src={instagram}></img></a>

                    <a href="https://twitter.com/noleggiova" target="_blank">
                        <img className="footer-logo" src={twitter}></img></a>
                </div>

                <h2>
                    <span id="contact-right">0774/418363</span>
                </h2>
            </div >
        );
    }

}

export default Footer;
