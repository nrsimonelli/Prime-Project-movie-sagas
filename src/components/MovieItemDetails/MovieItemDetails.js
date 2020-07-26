import React, { Component } from "react";
import { connect } from "react-redux";

import EditButton from '../buttons/EditButton/EditButton';
import AllMoviesButton from '../buttons/AllMoviesButton/AllMoviesButton';


class MovieItemDetails extends Component {

  state = {
    id: this.props.match.params.id
  }


  componentDidMount = () => {
    this.getMovies();
  }

  getMovies = () => {
    let index = this.state.id;
    console.log('index:', index);
    this.props.dispatch({ type: "FETCH_MOVIE_DETAIL" });
    this.setState({
      ...this.state, 
      movieTitle: this.props.movies[1].title
    })
    
  };
  
  render() {
    return (
      <div>
        <p>{this.state.movieTitle}</p>
        {/* <p>{this.props.match.params.title}</p> */}
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

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(MovieItemDetails);


