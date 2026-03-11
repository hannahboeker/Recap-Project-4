import ColorCards from "./Components/Color/ColorCards";
import ColorForm from "./Components/Color/ColorForm";
import { initialColors } from "./lib/colors";
import "./App.css";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [colorCards, setColorCard] = useLocalStorageState("colorCards", {
    defaultValue: initialColors,
  });

  //Funktion die Änderung (neue Card) hinzufügt
  function onSubmit(newColorCard) {
    newColorCard.id = uid();
    setColorCard([newColorCard, ...colorCards]);
  }

  // Funktion die Karte löscht/ card.id / Array colorCards wird gefiltert und nur Objekte, dessen Id nicht mit IdToDelete übereistimmen werden angezeigt
  // Argument idToDelet wird bei Funktionsaufruf die card.id übergeben. Für jedes Element des Arrays wird nacheinander in cards eingesetzt und nach Bedigung geprüft
  function onDelete(idToDelete) {
    const notDeletedCards = colorCards.filter((card) => card.id !== idToDelete);
    setColorCard(notDeletedCards);
  }

  //Funktion für Inneres Formular // checken welche Card geupdatetd wurde und dann nur diese ändern
  function onInnerSubmit(updatedCard) {
    setColorCard(
      colorCards.map((card) =>
        card.id === updatedCard.id ? updatedCard : card,
      ),
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>

      <ColorForm onSubmit={onSubmit} />
      <ColorCards
        colorCards={colorCards}
        onDelete={onDelete}
        onInnerSubmit={onInnerSubmit}
      />
    </>
  );
}
