import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class CancelButton extends Component {

  handleClick = (event) => {
    this.props.history.push(`/details/${this.props.id}`);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Cancel</button>
      </div>
    );
  }
}

export default withRouter(CancelButton);
