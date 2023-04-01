import Card from "./Card";

export default function Cards(props) {
  const cards = props.characters;
  const listItems = cards.map((elem) => {
    return (
      <li key={elem.toString()}>
        <Card
        
          id={elem.id}
          name={elem.name}
          status={elem.status}
          species={elem.species}
          gender={elem.gender}
          origin={elem.origin.name}
          image={elem.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        />
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}
