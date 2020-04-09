import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IconContext } from "react-icons";


function MovieRatings({ ratings }) {
    // const film = props.film;
    // const { film } = props;

    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">                   
                    <div className="card-text row">
                        <div className="card-body">
                        <IconContext.Provider value={{ color: "yellow", size: "3em"}}>
                          <div>
                            <FaStar />
                          </div>
                        </IconContext.Provider>
                            <div>
                                <h5 className="card-text">{ ratings.imdbRating }/10</h5>
                                <p className="card-text"> { ratings.imdbVotes }</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}



export default MovieRatings;