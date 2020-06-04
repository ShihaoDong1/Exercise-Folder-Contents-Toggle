import React, { Component } from "react";

class FolderToggle extends Component {
  constructor() {
    super();
    this.state = {
      didClickToggle: true
    };

    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton() {
		this.setState(function(prevState) {
			return {didClickToggle: !prevState.didClickToggle};
		});
  }

  render() {
    if (this.state.didClickToggle) {
      return (
        <div>
          <ul>
            <li>File1</li>
            <li>File2</li>
            <li>File3</li>
          </ul>
          <button onClick={this.toggleButton}>Toggle</button>
        </div>
      );
    }
    else {
      return (
        <button onClick={this.toggleButton}>Toggle</button>
      );
    }
  }
}

export default FolderToggle;
