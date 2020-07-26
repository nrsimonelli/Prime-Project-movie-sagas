import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SaveButton extends Component {
  handleClick = (event) => {
    // this.props.history.push("all-movies");
    console.log("Saving new details for selected movie");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Save</button>
      </div>
    );
  }
}

export default withRouter(SaveButton);
