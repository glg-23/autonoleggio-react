import React from 'react';
import './Informazioni.css';
import InCostruzione from '../inCostruzione/InCostruzione';

class Informazioni extends React.Component {

    render() {
        return (
            <div className='info'>
                <h2 className='titoloInfo'>Informazioni</h2>

                <InCostruzione>
                </InCostruzione>
            </div>
        );
    }
}

export default Informazioni;
