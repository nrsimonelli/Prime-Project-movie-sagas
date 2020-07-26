import React, { Component } from "react";

import SaveButton from "../buttons/SaveButton/SaveButton";
import CancelButton from "../buttons/CancelButton/CancelButton";

class EditMovieItem extends Component {
  render() {
    return (
      <div className="movie-item-details">
        <input />
        <br/>
        <br/>
        <textarea></textarea>
        <br/>
        <br/>
        <SaveButton/>
        <CancelButton/>
      </div>
    );
  }
}

export default EditMovieItem;
