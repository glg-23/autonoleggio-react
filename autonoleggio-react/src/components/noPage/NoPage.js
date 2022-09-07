import React from 'react';
import './NoPage.css';
import Bottone from '../bottone/Bottone';
import logoNoPage from '../../media/icon/noPage.png';

class NoPage extends React.Component {

    render() {
        return (
            <div className='noPage'>
                <img
                    className='logoNoPage'
                    src={logoNoPage}
                />
                <h2 className='titoloNoPage'>Pagina non trovata</h2>

                {
                    <Bottone
                        testo='Torna alla home'
                        linkBottone='/home'>
                    </Bottone>
                }
            </div>
        );
    }
}

export default NoPage;
