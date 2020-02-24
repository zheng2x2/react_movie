import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

class Movie extends React.Component {
    
    static propTypes = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired
    }


    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{this.props.title }</h1>
            </div>
        )
    }
}


class MoviePoster extends React.Component {

    static propTypes = {
        poster : PropTypes.string.isRequired,

    }

    render() {
        return (
            <div>
                <img src={this.props.poster} alt="Movie Poster"/>
            </div>
        )
    }
}
export default Movie;