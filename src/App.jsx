import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorCard from "./Components/Color/ColorCard";
import "./App.css";

function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorCard

      //Für eine Karte___________________________
      // role={initialColors[0].role}
      // hex={initialColors[0].hex}
      // contrastText={initialColors[0].hex}
      ></ColorCard>
    </>
  );
}

export default App;
