import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';

class MovieList extends Component {
    render() {
        return (
          <div className="movie-list">
            <MovieItem />
            <MovieItem />
            <MovieItem />
          </div>
        );
    }
}

export default MovieList;
