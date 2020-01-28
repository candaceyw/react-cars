import React, {useState, useEffect} from 'react'
import './Car.scss'
// import '../Card/Card.scss'
import photo from '../../images/comingSoon.jpg';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import {useParams} from 'react-router-dom';

    function Car({ cars, setCars }) {
    const { id } = useParams();
    const[car, setCar] = useState({})

    useEffect(() => {
        setTimeout(function(){
            const actualCar = cars.filter((car => {
                return car.id == id
            }))
            setCar(actualCar[0])
        }, 2500)
       
    },[])
    if (!car || !car.price) {
		return (
			<div className='car-container'>
				<div className='car'>
					{<Skeleton className='car' height={300} width={400} />}
					{<Skeleton className='car' height={300} width={400} />}
					{<Skeleton className='car' height={300} width={400} />}
					{<Skeleton className='car' height={300} width={400} />}
				</div>
			</div>
      )
    }

    return (
        
        
        <div className='car-container' >
        <div className="car" key={car.id}>
        
       <h1>{car.make}</h1>
       <p>{car.model}</p>
       
       <img src={photo || <SkeletonTheme color="#202020" highlightColor="#444" />}  />
       <p>VIP Price: <span className="price"> ${car.price.toLocaleString()} </span></p> 

   </div>
   </div>
   
    )
}

export default Car;