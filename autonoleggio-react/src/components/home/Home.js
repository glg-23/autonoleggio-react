import React from 'react';
import './Home.css';
import InCostruzione from '../inCostruzione/InCostruzione';


class Home extends React.Component {

    render() {
        return (
            <div className='sfondoHome'>
                <InCostruzione>
                </InCostruzione>
            </div>
        );
    }
}

export default Home;
