import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((value) => value.json())
      .then((users) =>
        this.setState(() => {
          return { monster: users };
        })
      )
      .catch(() => {
        console.log("error");
      });
  }

  render() {
    console.log("render");

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            let filterText = event.target.value.toLowerCase();
            let result = this.state.monster.filter((val) =>
              val.name.toLowerCase().includes(filterText)
            );
            console.log(result);
            this.setState(() => {
              return { monster: result };
            });
          }}
        ></input>
        <h2>
          {this.state.monster.map((monster) => {
            return (
              <div key={monster.id}>
                {monster.name}
                <br />
              </div>
            );
          })}
        </h2>
      </div>
    );
  }
}
export default App;
