import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import MovieRatings from './MovieRatings';
import AuthContext from '../auth/AuthContext';
import { FaStar } from 'react-icons/fa';
import { IconContext } from "react-icons";

function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([null]);
    const { token } = useContext(AuthContext);

    async function getMovieById(id) {
        try {
            const res = await axios('https://ancient-caverns-16784.herokuapp.com/movies/' + id);
            setMovie(res.data);
            console.log(res.data);
        } catch (e) {
            console.warn(e);
        }

    }



    useEffect(() => {
        getMovieById(movieId);
    }, [movieId]);

    if (movie) {
        console.log(movie);
        return (
            <>

                <div className="flex justify-content-between">
                    <div className="row">
                        <div>
                            <h1>{movie.Title} ({movie.Year})</h1>
                            <p> {movie.Rated} | {movie.Runtime} | {movie.Genre} | {movie.Year} ( {movie.Country} ) </p>
                        </div>
                        <div className="row card-body ">
                            <IconContext.Provider value={{ color: "#e4bb24", size: "3em" }}>
                                <div>
                                    <FaStar />
                                </div>
                            </IconContext.Provider>
                            <div>
                                <h5 className="card-text">{movie.imdbRating}/10</h5>
                                <p className="card-text"> {movie.imdbVotes}</p>
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        { movie.map(details => <MovieRatings ratings={ details } key={ movie.value } />) }
                    </div> */}
                    <img src={movie.Poster} />
                    <p> <strong>Plot: </strong>{movie.Plot} </p>
                    <p> <strong>Director: </strong>{movie.Director} </p>
                    <p> <strong>Writers: </strong>{movie.Writer} </p>
                    <p> <strong>Actors: </strong>{movie.Actors} </p>
                </div>
                {
                    token ?
                        <Link className="btn btn-primary" to={"/movies/edit/" + movie._id}>Edit This Movie</Link>
                        :
                        null
                }


            </>
        );
    } else {
        return <h1>Loading ...</h1>;
    }
}

export default MovieDetails;