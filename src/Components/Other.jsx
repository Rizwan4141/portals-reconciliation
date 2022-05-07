import React, { Component } from "react";
import ReactDOM from "react-dom";

class Other extends Component {
  render() {
    <div>
      ReactDOM.createPortal(
      <h1>Other Portal</h1>, document.getElementById('Other-root') )
    </div>;
  }
}

export default Other;
