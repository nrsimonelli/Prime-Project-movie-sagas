import React, { Component } from "react";
import { connect } from "react-redux";

import CancelButton from "../buttons/CancelButton/CancelButton";

class EditMovieItem extends Component {

  state = {
    id: this.props.match.params.id,
    newTitle: '',
    newDescription: ''
  }

  backToMovieList = (event) => {
    this.props.history.push(`/`);
  };

  handleChange = (event, propertyName) => {
    this.setState({
        ...this.state,
        [propertyName]: event.target.value
    });
  }

  submitMovieChanges = () => {
    this.props.dispatch({
      type: "CHANGE_MOVIE_DETAILS",
      payload: {
        id: this.state.id,
        title: this.state.newTitle,
        description: this.state.newDescription
      },
    }); 
  }

  render() {
    return (
      <div className="movie-item-details">
        <input type="text"
          value={this.state.newTitle}
          onChange={event => this.handleChange(event, 'newTitle')} />
        <br/>
        <br/>
        <textarea type="text"
          value={this.state.newDescription}
          onChange={event => this.handleChange(event, 'newDescription')} />
          {/* {JSON.stringify(this.state)} <---- To check if changes are
           being captured in state */}
        <br/>
        <br/>
        <button onClick={this.submitMovieChanges}>Save Info</button>
        <CancelButton id={this.state.id} />
        <button onClick={this.backToMovieList}>Back to Movie List</button>
      </div>
    );
  }
}

const putReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateToProps)(EditMovieItem);
