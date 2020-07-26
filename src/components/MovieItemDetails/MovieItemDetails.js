import React, { Component } from "react";
// import { connect } from "react-redux";

import EditButton from '../buttons/EditButton/EditButton';
import AllMoviesButton from '../buttons/AllMoviesButton/AllMoviesButton';

class MovieItemDetails extends Component {
  
  render() {
    return (
      <div className="movie-item-details">
        {console.log(this.props.match)}
        {/* <h3>{this.props.match}</h3> */}
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
        </p>
        <EditButton />
        <AllMoviesButton />
      </div>
    );
  }
}

    // <div>
    //   <h2>Details</h2>
    //   <p>The `match` prop is: {JSON.stringify(props.match)}</p>
    //   {console.log(props.match)}
    //   {/* TODO - update ??? below to show only the id. */}
    //   <p>This is the details page for item with id {props.match.params.id}!</p>
    // </div>;


export default MovieItemDetails;
