import React  from 'react';
import './Card.css'
const Card = (props) => {

    const { name, email, id, username } = props;

    return( 
        <div className='bg-washed-green dib br3 b--solid pa3 ma2 grow bw2 b--green shadow-5 tc'>
            <img alt='robots' src={`https://robohash.org/${id}set_set3/bgset_bg1/3.14159?size=200x200`}/>
            <h2>{name}</h2>
            <p>Username: {username}</p>
            <p id='email'>Email: {email}</p>
        </div>
    );
}


export default Card;