import ColorCards from "./Components/Color/ColorCards";
import ColorForm from "./Components/Color/ColorForm";
import { initialColors } from "./lib/colors";
import "./App.css";
import { useState } from "react";
import { uid } from "uid";

export default function App() {
  const [colorCards, setColorCard] = useState(initialColors);

  //Funktion die Änderung (neue Card) hinzufügt
  function onSubmit(newColorCard) {
    newColorCard.id = uid();
    setColorCard([newColorCard, ...colorCards]);
  }

  // Funktion die Karte löscht/ card.id
  function onDelete(idToDelete) {
    const notDeletedCards = colorCards.filter(
      (ColorCards) => ColorCards.id !== idToDelete,

    );

    setColorCard(notDeletedCards);
  }

  return (
    <>
      <h1>Theme Creator</h1>

      <ColorForm onSubmit={onSubmit}></ColorForm>
      <ColorCards colorCards={colorCards} onDelete={onDelete}></ColorCards>
    </>
  );
}
