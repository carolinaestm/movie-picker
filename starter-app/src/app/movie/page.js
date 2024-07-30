'use client'

import {useState} from 'react';
import Movie from '../../components/Movie'
import {data} from '../../data/data';
import './PickMovie.css';

const PickMovie = () => {
    const [randomMovie, setRandomMovie] = useState({});
    const [picked, setPicked] = useState(false);

    const moviePicker = () => {
        const randomPick = data[Math.floor(Math.random() * data.length)];
        setRandomMovie(randomPick);
        setPicked(true);
    }

    const pickAgain = () => {
        setRandomMovie({});
        setPicked(false);
    }
    
    return (
        <div >
            <h1 className="title">Pick a Movie</h1>
            <div className='pickMovie'>
            {picked && 
            <div className ="picked">
        
                <Movie name={randomMovie.name} image={randomMovie.img} genre={randomMovie.genre}/>
                <button className="pickButton" onClick={pickAgain}>Pick Again</button>
            </div>}
            {!picked && 
            <div>
            <button className ="notPicked" onClick={moviePicker}>Pick a Movie</button>
            </div>}
            </div>
        </div>
    );
}

export default PickMovie;