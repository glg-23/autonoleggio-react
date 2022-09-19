import React from 'react';
import './Contatti.css';
import InCostruzione from '../inCostruzione/InCostruzione';


class Contatti extends React.Component {

    render() {
        return (
            <div className='sfondoContatti'>
                <InCostruzione>
                </InCostruzione>

                {/*                 
                <div class="jumbotron half-screen-contacts half-box col-12">
                    <h1 class="display-4 title-cs">Contattaci: </h1>
                    <hr class="my-4">
                        <div class="row col-12">
                            <form class="contact-box col-md-12">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">La tua Email:</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">La tua Richiesta:</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </form>
                        </div>
                </div> 
                */}



            </div>
        );
    }
}

export default Contatti;
