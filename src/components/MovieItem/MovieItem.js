import React, { Component } from "react";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

class MovieItem extends Component {

  state= {
    movieId: this.props.movie.id
  }

    handleClick = (event) => {
    console.log(this.state.movieId);
    this.props.history.push(`/details/${this.state.movieId}`);
    };

  render() {
    return (
      <div className="movie-item">
        <img
          className="searchImage"
          src={this.props.movie.poster}
          alt={this.props.movie.title}
          onClick={this.handleClick}
        ></img>
        {/* {JSON.stringify(this.props.movie)} */}
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default withRouter(connect(mapReduxStateToProps)(MovieItem));
