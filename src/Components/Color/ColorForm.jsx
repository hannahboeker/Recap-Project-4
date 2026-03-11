import { useState } from "react";
import "./ColorForm.css";
import ColorInput from "./ColorInput";

//Hier wird das Formular erstellt, die Daten ausgelesen und die onSubmit Funktion aus dem App.jsx aufgerufen mit den ausgelesenen Daten

export default function ColorForm({ card, onSubmit, variant }) {
  const [hex, setHex] = useState(card?.hex || "#000000");
  const [role, setRole] = useState(card?.role || "");
  const [contrastText, setContrastText] = useState(
    card?.contrastText || "#000000",
  );

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({ ...card, hex, role, contrastText });
  }

  return (
    <>
      <form
        //template Literal für Klassen / in geschfeiften klammern wird if ausgeführt und je nach ergebnis ander Endung an String eingefügt
        //wenn ich der Form bei App.js auch variante="card" mitgeben würde, würde auch die Klasse kriegen
        className={`colorForm ${variant === "card" ? "colorForm--card" : ""}`}
        onSubmit={handleSubmit}
      >
        <div
          className={`colorForm__fields ${
            variant === "card" ? "colorForm__fields--card" : ""
          }`}
        >
          {/* {Role-Input} */}
          <div className="colorForm__field">
            <label htmlFor="colorForm__input_role" className="colorForm__role">
              ROLE
            </label>
            {/* name den ich hier vergebe wird der kex vom objekt, 
            den ich dann beim returnen und mappen aufrufen muss----> siehe ColorCard.jsx */}
            <input
              type="text"
              name="role"
              id="colorForm__input_role"
              value={role}
              onChange={(event) => setRole(event.target.value)}
            />
          </div>

          {/* {Hex-Input} */}
          <div className="colorForm__field">
            <label htmlFor="hex" className="colorForm__hex">
              HEX
            </label>
            <ColorInput
              id={"hex"}
              value={hex}
              onChange={(event) => setHex(event.target.value)}
            ></ColorInput>
          </div>

          {/* {contrastText-Input} */}
          <div className="colorForm__field">
            <label htmlFor="contrastText" className="colorForm__contrastText">
              CONTRAST TEXT
            </label>
            <ColorInput
              id={"contrastText"}
              value={contrastText}
              onChange={(event) => setContrastText(event.target.value)}
            ></ColorInput>
          </div>
        </div>
        <button className="colorForm__button" type="submit">
          JETZT WIRDS BUNT
        </button>
      </form>
    </>
  );
}
