'use client'

import {data} from '../data/data';
import Movie from '../components/Movie'
import './home.css';

export default function Home() {
  return (
    <main >
        <div>
            <h1 className="title">Catalog</h1>
            <div className="movies">
                {data.map((movie, index) => (
                    <Movie name={movie.name} genre={movie.genre} image={movie.img} key={index}/>
                ))}
            </div>
        </div>
    </main>
  )
}