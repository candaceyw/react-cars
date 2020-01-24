import React, {useState, useEffect} from 'react';
import Card from '../Card/Card';
import './Landing.scss'
import {Link} from 'react-router-dom';

function Landing({ cars, setCars }) {
    const [input, setInput] = useState('')
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
            setFiltered(cars)
    }, [cars])

    const submitHander = e => {
        e.preventDefault();
        const fil = cars.filter(el => {
            return el.model === input
        })
        setFiltered(fil)
    }

    return (
        <div className="car-section">
            <form onSubmit={(e) => submitHander(e)}>
            <input onChange={(e) => setInput(e.target.value)} name="search" placeholder="Enter A Model"/>
            <button >Search</button>
            </form>
            <button onClick={()=> setFiltered(cars)}>clear Filters </button>
            <Link to="/add">Add A New Car To Inventory</Link>
            {filtered.map((car) => {
                return <Link to={`/cars/${car.id}`}><Card car={car} /></Link>
            })}
        </div>
    )
}

export default Landing
