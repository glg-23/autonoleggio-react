import React from 'react';
import './InCostruzione.css';
import Bottone from '../bottone/Bottone';
import logoCostruzione from '../../media/inCostruzione.png';

class InCostruzione extends React.Component {

    render() {
        return (
            <div className='inCostruzione'>
                <img
                    className='logoCostruzione'
                    src={logoCostruzione}
                />

                <h2 className='titoloInCostruzione'>Pagina in costruzione</h2>

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

export default InCostruzione;
