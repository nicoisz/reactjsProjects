import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((value) => value.json())
      .then((users) =>
        this.setState(
          () => {
            return { monster: users };
          }
          // () => {
          //   console.log(this.state);
          // }
        )
      );
  }

  render() {
    return (
      <div className="App">
        <h2>
          {this.state.monster.map((monster) => {
            return <div key={monster.id}>{monster.name}</div>;
          })}
        </h2>
      </div>
    );
  }
}
export default App;
