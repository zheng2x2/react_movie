import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LineEllipsis from 'react-lines-ellipsis';

// class Movie extends React.Component {
//     static propTypes = {
//         title : PropTypes.string.isRequired,
//         poster : PropTypes.string.isRequired
//     }
//     render() {
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster} />
//                 <h1>{this.props.title }</h1>
//             </div>
//         )
//     }
// }

function Movie ({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Columns">
            <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Columns">
                <h1>{title }</h1>
                <div className="Movie__Genres">
                    {genres.map((g, i) => <MovieGenre genre={g} key={i}/> )}
                </div>
                <div className="Movie__Synopsis">
                    <LineEllipsis text={synopsis} maxLine='4' ellipsis=' ...'
                                trimRight basedOn='letters' />
                </div>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

function MovieGenre({genre}) {
    return (
        <span className="Movie__Genre">{genre} </span>
    )
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
}
MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}
MovieGenre.propTypes = {
    genre : PropTypes.string.isRequired
}
export default Movie;