import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import InputComponent from "./components/search-box/input.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monster, setMonster] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monster);
  console.log("render");
  useEffect(() => {
    console.log("useEffect 1");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((value) => value.json())
      .then((users) => setMonster(users))
      .catch(() => {
        console.log("error");
      });
  }, []);

  useEffect(() => {
    const filteredMonsters = monster.filter((val) => {
      return val.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(filteredMonsters);
    console.log("useEffect 2");
  }, [monster, searchField]);

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
      <CardList className="monsterList" monsters={filteredMonsters}></CardList>
    </div>
  );
};
//

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
