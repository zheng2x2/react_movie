import React from 'react';
import './Movie.css';

class Movie extends React.Component {
    


    render() {
        return (
            <div>
                <h1>Hello this is a Movie</h1>
                <MoviePoster/>
            </div>
        )
    }
}


class MoviePoster extends React.Component {

    render() {
        return (
            <img src=""/>
        )
    }
}
export default Movie;