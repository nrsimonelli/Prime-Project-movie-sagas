import React, { Component } from "react";
import { connect } from "react-redux";

import EditButton from '../buttons/EditButton/EditButton';
import AllMoviesButton from '../buttons/AllMoviesButton/AllMoviesButton';


class MovieDetails extends Component {

  state = {
    id: this.props.match.params.id
  }

  componentDidMount = () => {
    this.getDetails();
    this.getMovie();
    console.log('This is the state', this.state);
  }

  getDetails = () => {
    this.props.dispatch({ type: "FETCH_DETAILS" });
  };

  getMovie = () => {
    this.props.dispatch({ type: "FETCH_MOVIE" });
  };
  
  render() {
    return (
      <div>
        <p>{this.props.match.params.id}</p>
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


