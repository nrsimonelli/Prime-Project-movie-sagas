import React, { Component } from "react";
import { connect } from "react-redux";

import EditButton from '../buttons/EditButton/EditButton';
import AllMoviesButton from '../buttons/AllMoviesButton/AllMoviesButton';


class MovieDetails extends Component {

  state = {
    id: this.props.match.params.id, //for routes
    movieId: Number((this.props.match.params.id) - 1),
    poster: '',
    title: '',
    description: '',
    // genres: []
  }

  componentDidMount = () => {
    this.getDetails();
    this.getMovie();
    
  }

  getDetails = () => {
    this.props.dispatch({ type: "FETCH_DETAILS" });
    this.setState({
      ...this.state,
      // genres: this.props.reduxState.details[this.state.movieId].array_agg,
    })
  };

  getMovie = () => {
    this.props.dispatch({ type: "FETCH_MOVIE" });
    this.setState({
      ...this.state,
      poster: this.props.reduxState.movies[this.state.movieId].poster,
      title: this.props.reduxState.movies[this.state.movieId].title,
      description: this.props.reduxState.movies[this.state.movieId].description
    })
  };
  
  render() {
    return (
      <div>
        <img
          src={this.state.poster}
          alt={this.state.title}
        ></img>
        <h2>{this.state.title}</h2>
        <p>{this.state.description}</p>
        {/* <p>{this.state.genres}</p> */}
        <EditButton id={this.state.id} />
        <AllMoviesButton />
      </div>
    );
  }
}

const putReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateToProps)(MovieDetails);


