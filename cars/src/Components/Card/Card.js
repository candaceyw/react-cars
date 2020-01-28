import React, { useState, useEffect } from 'react'
import './Card.scss';
import photo from '../../images/comingSoon.jpg';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function Card({car}) {

    if (!car){
        return (<h1> Loading...</h1>)
    }

    return (
  
             <div className="card" key={car.id}>
           
            <h1>{car.make}</h1>
            <p>{car.model}</p>
            <img src={photo} />
            <p>VIP Price: <span className="price"> ${car.price.toLocaleString()} </span></p> 

        </div>
        
    )
}

export default Card
