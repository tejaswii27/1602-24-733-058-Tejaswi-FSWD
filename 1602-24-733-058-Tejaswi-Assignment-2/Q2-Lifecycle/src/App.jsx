
import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("Component Mounted");

    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
    clearInterval(this.timer);
  }

  render() {
    console.log("Render called");

    return (
      <div>
        <h2>Digital Clock</h2>
        <h3>{this.state.time}</h3>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState({ show: !this.state.show })
          }
        >
          {this.state.show ? "Hide Clock" : "Show Clock"}
        </button>

        {this.state.show && <Clock />}
      </div>
    );
  }
}

export default App;
