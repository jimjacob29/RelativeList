import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  relative = ["ab", "bc", "cd", "de"];
  render() {
    return (
      <>
        <ol key="relativeList">
          {this.relative.map((relative, index) => (
            <li key={`relativeListItem ${index}`}>{relative}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
