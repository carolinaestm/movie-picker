'use client'

import {useState} from 'react';
import {useRouter} from "next/navigation";
import {data} from '../../data/data';
import './addMovie.css';

const AddMovie = () => {
    const router = useRouter();

    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [image, setImage] = useState("");

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const genreHandler = (event) => {
        setGenre(event.target.value);
    }

    const imageHandler = (event) => {
        setImage(event.target.value);
    }

    const addMovieHandler = (event) => {
        data.push({
            name: name,
            genre: genre,
            img: image
        });
        router.push('/');
    }

    return (
        <div className="form">
            <h1 className="title">Add Movie</h1>
            <label>Movie Title</label>
            <input onChange={nameHandler}></input>
            <label>Genre</label>
            <input onChange={genreHandler}></input>
            <label>Image</label>
            <input onChange={imageHandler}></input>
            <button onClick={addMovieHandler}>Add Movie</button>
        </div>
    );
}

export default AddMovie;
