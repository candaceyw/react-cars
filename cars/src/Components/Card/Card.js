import React, { useState, useEffect } from 'react'
import './Card.scss';


function Card({car}) {

    if (!car){
        return (<h1> Loading...</h1>)
    }

    return (
        <div className="card" key={car.id}>
            <h>{car.make}</h>
            <p>{car.model}</p>
            <p>${car.price}</p> 

        </div>
    )
}

export default Card
