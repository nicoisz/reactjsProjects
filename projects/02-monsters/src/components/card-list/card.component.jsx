import "./card-list.style.css";

const Card = ({ monster }) => {
  const { id, name, email } = monster;
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
};

export default Card;
