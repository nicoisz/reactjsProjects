import logo from "./logo.svg";
import "./App.css";
import { Component, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import InputComponent from "./components/search-box/input.component";

const App = () => {
  const [searchField, setSearchField] = useState("");

  const onSearchChange = (event) => {
    let searchField = event.target.value.toLowerCase();
    setSearchField(searchField);
  };

  return (
    <div className="App">
      <InputComponent
        className="input"
        placeholder="search monsters"
        onChangeHandler={onSearchChange}
      ></InputComponent>
    </div>
  );
};
// <CardList className="monsterList" monsters={monsterArray}></CardList>

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monster: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((value) => value.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monster: users };
//         })
//       )
//       .catch(() => {
//         console.log("error");
//       });
//   }

//   onSearchChange = (event) => {
//     let searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monster, searchField } = this.state;
//     const { onSearchChange } = this;
//     let monsterArray = monster.filter((val) =>
//       val.name.toLowerCase().includes(searchField)
//     );

//     return (
//       <div className="App">
//         <InputComponent
//           className="input"
//           placeholder="search monsters"
//           onChangeHandler={onSearchChange}
//         ></InputComponent>
//         <CardList className="monsterList" monsters={monsterArray}></CardList>
//       </div>
//     );
//   }
// }
export default App;
