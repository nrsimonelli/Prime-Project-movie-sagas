import React, { Component } from "react";
import { connect } from "react-redux";

class MovieItem extends Component {
  render() {
    return (
      <div className="movie-item">
        <img
          className="searchImage"
          src={this.props.thisItem.poster}
          alt={this.props.thisItem.title}
        ></img>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(MovieItem);
