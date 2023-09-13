import { Component } from "react";
import "./card-list.style.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <section className="monsters-list">
        {monsters.map((monster) => {
          const { name, id, email } = monster;
          return (
            <div className="card" key={id}>
              <span></span>
              <div className="content">
                <img
                  alt={name}
                  src={`http://robohash.org/${id}?set=set2&size=120x120`}
                ></img>
                <p>{name}</p>
                <p className="email">{email}</p>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}

export default CardList;
