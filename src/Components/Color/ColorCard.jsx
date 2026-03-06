import "./ColorCard.css";
import { initialColors } from "../../lib/colors";
import Color from "./Color";

// Funktion für eine Karte______________________________________
// export default function ColorCard({ role, hex, contrastText }) {
//   console.log(role, hex, contrastText);

//   return (
//     <>
//       <ul className="ColorCards">
//         <li className="ColorCard">
//           <h2 className="hex">{hex}</h2>
//           <p className="role">{role}</p>
//           <p className="contrastText">{contrastText}</p>
//         </li>
//       </ul>
//     </>
//   );

// }

export default function ColorCard() {
  return (
    <>
      <ul className="ColorCards">
        {initialColors.map((initialColor) => (
          <li
            className="ColorCard"
            style={{ backgroundColor: initialColor.hex }}
            key={initialColor.id}
          >
            <h2 className="hex">{initialColor.hex} </h2>
            <p>
              {initialColor.role}
              {initialColor.contrastText}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
