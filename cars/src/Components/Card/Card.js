import React, { useState, useEffect } from 'react'
import './Card.scss';


function Card({car}) {

    if (!car){
        return (<h1> Loading...</h1>)
    }

    return (
         <div className="cardWrapper">
             <div className="card" key={car.id}>
           
            <h1>{car.make}</h1>
            
            <p>{car.model}</p>
            <p>${car.price}</p> 

        </div>
        </div>
    )
}

export default Card
