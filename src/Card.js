import React from 'react';

const Card = ({name, email, id}) => {
    
    return (
        <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
        <img src={`https://robohash.org/${id}?200x200`} alt='Jane Doe'/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;