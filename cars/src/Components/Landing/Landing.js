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
            <div className="nav">
            <form onSubmit={(e) => submitHander(e)} className="search-form">
            <input onChange={(e) => setInput(e.target.value)} name="search" placeholder="Enter A Model Name" className="search-bar"/>
            <button className="search-button"><i class="fas fa-search"></i></button>
            </form>
            <button onClick={()=> setFiltered(cars)} className="clearButton">Clear Filters </button>
            <Link to="/add"><button className="invButton">Add A New Car To Inventory</button></Link>
            </div>
            <div className="newCardWrapper">
            {filtered.map((car) => {
                return <div className="NewCards"><Link to={`/cars/${car.id}`} ><Card car={car} /></Link></div>
            })}
        </div></div>
    )
}

export default Landing
