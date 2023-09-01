import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "nico",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>hola {this.state.name}</p>
          <button
            onClick={() => {
              this.setState({ name: "Nico Silva Z." });

              console.log(this.state.name);
            }}
          >
            cambiar nombre
          </button>
        </header>
      </div>
    );
  }
}
export default App;
