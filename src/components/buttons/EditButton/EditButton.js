import React, { Component } from "react";
import { withRouter } from "react-router-dom";


class EditButton extends Component {

  handleClick = (event) => {
    this.props.history.push("/edit-movie");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Edit Info</button>
      </div>
    );
  }
}

export default withRouter(EditButton);
