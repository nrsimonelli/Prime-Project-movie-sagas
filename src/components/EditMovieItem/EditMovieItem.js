import React, { Component } from "react";

import SaveButton from "../buttons/SaveButton/SaveButton";
import CancelButton from "../buttons/CancelButton/CancelButton";

class EditMovieItem extends Component {

  state = {
    id: this.props.match.params.id
  }

  render() {
    return (
      <div className="movie-item-details">
        <input />
        <br/>
        <br/>
        <textarea></textarea>
        <br/>
        <br/>
        <SaveButton id={this.state.id} />
        <CancelButton id={this.state.id} />
      </div>
    );
  }
}

export default EditMovieItem;
