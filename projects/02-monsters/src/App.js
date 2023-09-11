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

  onSearchChange = (event) => {
    let searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monster, searchField } = this.state;
    const { onSearchChange } = this;
    let monsterArray = monster.filter((val) =>
      val.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
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
