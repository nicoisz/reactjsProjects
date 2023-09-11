import { Component } from "react";
import "./card-list.css";

class CardList extends Component {
  render() {
    let monsterArray = this.props;
    console.log(monsterArray.Monsters);

    return (
      <section className="monsters-list">
        {monsterArray.Monsters.map((monster) => {
          return (
            <div className="card" key={monster.id}>
              <span></span>
              <div className="content">{monster.name}</div>
            </div>
          );
        })}
      </section>
    );
  }
}

export default CardList;
