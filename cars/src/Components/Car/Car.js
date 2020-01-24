import React, {useState, useEffect} from 'react'
import './Car.scss'
import '../Card/Card.scss'

import {useParams} from 'react-router-dom';

    function Car({cars, setCars}) {
    const {id} = useParams();
    const[car, setCar] = useState({})

    useEffect(() => {
        const actualCar = cars.filter((car => {
            return car.id == id
        }))
        setCar(actualCar[0])
    },[])

    if(!car){
        return(<h1> OH NO, that car is sold!</h1>)
    }

    return (
        <div className="cardWrapper">
        <div className="card">
        <h>{car.make}</h>
        <p>{car.model}</p>
        <p>${car.price}</p>    
    </div></div>
    )
}

export default Car;