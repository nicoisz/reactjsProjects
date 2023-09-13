import "./card-list.style.css";
import Card from "./card.component";

const CardList = ({ monsters }) => {
  return (
    <section className="monsters-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster}></Card>;
      })}
    </section>
  );
};

export default CardList;
