import React, { Component } from "react";
import { withRouter } from "react-router-dom";


class AllMoviesButton extends Component {

  handleClick = (event) => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>All Movies</button>
      </div>
    );
  }
}

export default withRouter(AllMoviesButton);
