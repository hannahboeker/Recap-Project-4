import "./ColorCard.css";

export default function ColorCards({ colorCards }) {
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
          </li>
        ))}
      </ul>
    </>
  );
}
