import { useState } from "react";
import "./ColorCard.css";
import ColorForm from "./ColorForm";

export default function ColorCards({ colorCards, onDelete, onInnerSubmit }) {
  const [confirmationId, setConfirmationId] = useState(null);
  const [editButtonState, setEditButtonState] = useState(null);

  function handleInnerFormSubmit(updatedCard) {
    onInnerSubmit(updatedCard);
    setEditButtonState(null);
  }

  // hier wird jetzt mit map für jedes Element aus dem Array ein Listen-Element erstellt.
  // ich gebe map () eine variable, die dann durch map mit jedem element des arrays nacheinander gefüllt wird
  // wenn ich auf einzelne eigenschaftenzugreifen will dann mit variablenname.keyname (den keynamen habe ich beim erstellen des Form in Color.Form.jsx vergeben)
  return (
    <>
      <ul className="ColorCards">
        {colorCards.map((card) => (
          <li
            className="ColorCard"
            style={{ backgroundColor: card.hex }}
            key={card.id}
          >
            <h2 className="hex">{card.hex}</h2>
            <p style={{ color: card.contrastText }}>{card.role} </p>
            <p style={{ color: card.contrastText }}>
              contrast: {card.contrastText}
            </p>
            {/* DELETE BUTTON____________________________________________________________________________________________________________________________________________________________________________________________________ */}
            {/* Wenn ich hier drauf klicke wird durch OnClick und State die confirmation Id zur card.id und dann ist bedigung weiter unten true und die Button werden angezeigt. 
            Dieser Button wird dann nicht mehr angeziegt weil bedigung flasch */}
            {confirmationId !== card.id && (
              <>
                <button
                  className="button__delete"
                  type="button"
                  onClick={() => setConfirmationId(card.id)}
                >
                  DELETE
                </button>
              </>
            )}
            {/* kann ich react einfach mit {...javascript...} hinzufügen */}
            {confirmationId == card.id && (
              <>
                <p>Really delete?</p>
                {/* bei cancel wird id auf null gesetzt, also wir nix gelöscht */}
                <button type="button" onClick={() => setConfirmationId(null)}>
                  CANCEL
                </button>
                {/* bei cancel wird onDelet Funktion, die oben als Parameter hinzugefügt word, ausgeführt.
                Auf card.id habe ich zugrieff weil das hier ja alles im map stattfindet. card.id wird hier als Argument 
                an die Funktion in App übergeben und füllt dort den Paramter idToDelete */}
                <button type="button" onClick={() => onDelete(card.id)}>
                  DELETE
                </button>
              </>
            )}
            {/* EDIT BUTTON____________________________________________________________________________________________________________________________________________________________________________________________________ */}
            {/* 1. handleEdit funktion. Wenn Button geklickt wird handleEdit ausgeführt. HandleEdit erstellt ein neues Formular */}
            {editButtonState !== card.id && (
              <>
                <button
                  type="button"
                  onClick={() => setEditButtonState(card.id)}
                >
                  EDIT
                </button>
              </>
            )}
            {editButtonState === card.id && (
              <ColorForm
                onSubmit={handleInnerFormSubmit}
                card={card}
              ></ColorForm>
            )}
          </li>
        ))}
        {/* KEINE COLOR CARD ÜBER MESSAGE */}
        {colorCards.length === 0 && (
          <>
            <p>Gar nichts los hier. Ertsell mal ne Karte!</p>
          </>
        )}
      </ul>
    </>
  );
}
