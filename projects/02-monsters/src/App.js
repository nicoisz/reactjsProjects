import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: "",
    };
  }

  componentDidMount() {
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
    let monsterArray = this.state.monster.filter((val) =>
      val.name.toLowerCase().includes(this.state.searchField)
    );
    console.log(monsterArray);

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            let searchField = event.target.value.toLowerCase();

            this.setState(() => {
              return { searchField };
            });
          }}
        ></input>
        <h2>
          {monsterArray.map((monster) => {
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
