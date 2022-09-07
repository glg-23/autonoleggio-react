import React from 'react';
import './Informazioni.css';
import Bottone from '../bottone/Bottone';

class Informazioni extends React.Component {

    render() {
        return (
            <div className='info'>
                <h2 className='titoloInfo'>Informazioni</h2>

                {
                    <Bottone
                        testo='Vai alla home'
                        linkBottone='/home'>
                    </Bottone>
                }
            </div>
        );
    }
}

export default Informazioni;
