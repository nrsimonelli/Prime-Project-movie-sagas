import React, { Component } from 'react';
import { connect } from "react-redux";
import MovieItem from '../MovieItem/MovieItem';

class MovieList extends Component {
    
    componentDidMount = () => {
        this.getMovies();
    }

    getMovies = () => {
        this.props.dispatch({ type: "FETCH_MOVIE" });
    };

    render() {
        return (
          <div className="movie-list">
            {/* {JSON.stringify(this.props.reduxState.movies)} */}
            {this.props.reduxState.movies.map((x, key) => {
              return (
                <div>
                  <MovieItem thisItem={x}/>
                </div>
              );
            })}

          </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(MovieList);
