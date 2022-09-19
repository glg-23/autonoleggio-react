import React from 'react';
import './InCostruzione.css';
import Bottone from '../bottone/Bottone';
import logoCostruzione from '../../media/icon/inCostruzione-white.png';

class InCostruzione extends React.Component {

    render() {
        return (
            <div className='containerCostruzione'>
                <div className='boxCostruzione'>
                    <img
                        className='logoCostruzione'
                        src={logoCostruzione}
                        alt={"in costruzione"}
                    />

                    <h2 className='titoloInCostruzione'>Pagina in costruzione</h2>

                    {
                        <Bottone
                            testo='Torna alla home'
                            linkBottone='/home'>
                        </Bottone>
                    }
                </div>
            </div>
        );
    }
}

export default InCostruzione;
