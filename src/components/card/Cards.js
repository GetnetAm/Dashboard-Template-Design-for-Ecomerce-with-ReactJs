import React, { useEffect, useState } from "react";
import Card from "./Card";

function Cards() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/cards")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCards(data);
      });
  });


  return (
    <>
      {cards &&
        cards.length > 0 &&
        cards.map(card=> <Card key={card._id} card={card} />)}
    </>
  );
}

export default Cards;
