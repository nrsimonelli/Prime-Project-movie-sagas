import React, { Component } from "react";
import { connect } from "react-redux";

class MovieItem extends Component {
  
    handleClick = (event) => {
    console.log('You clicked:', this.props.thisItem.title);
    // this.props.history.push("/movie-details/" ); //add movie id
  };

  render() {
    return (
      <div className="movie-item">
        <img
          className="searchImage"
          src={this.props.thisItem.poster}
          alt={this.props.thisItem.title}
          onClick={this.handleClick}
        ></img>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(MovieItem);
