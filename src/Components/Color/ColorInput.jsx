import { useState } from "react";

//Ich will mit UseState eine Funktion erstellen, die dem Text input und color input den gleichen wert /color, Setcolor) übergiebt,
//  so das beide synchronisiert sind egal welcher geändert wird.

export default function ColorInput({ id, defaultValue }) {
  // 1. UseState für newcolor, damit veränderte farbe gespeichert wird. Initialwert = default wert.
  const [newColor, setNewColor] = useState(defaultValue);

  // 2. Funktion die bei event onChange ansgeführt wird // Browser übergibt funktion immer als Argument. Event in Klammern hier al Platzhalter Parameter.
  function synchronizeColorInput(event) {
    setNewColor(event.target.value);
  }

  return (
    <>
      <input
        type="text"
        name={id}
        id={id}
        value={newColor}
        // 3.onchange event für beide inputs. Bei Veränderung, führe diese Funktion aus.
        onChange={synchronizeColorInput}
      />
      <input type="color" value={newColor} onChange={synchronizeColorInput} />
    </>
  );
}
