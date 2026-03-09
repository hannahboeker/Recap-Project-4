import "./ColorForm.css";
import ColorInput from "./ColorInput";

//Hier wird das Formular erstellt, die Daten ausgelesen und die onSubmit Funktion aus dem App.jsx aufgerufen mit den ausgelesenen Daten

export default function ColorForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);

    onSubmit(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="colorForm_fields">
          {/* {Role-Input} */}
          <div className="colorForm_field">
            <label htmlFor="colorForm_input_role" className="colorForm_lable">
              ROLE
            </label>
            {/* name den ich hier vergebe wird der kex vom objekt, 
            den ich dann beim returnen und mappen aufrufen muss----> siehe ColorCard.jsx */}
            <input
              type="text"
              name="role"
              id="colorForm_input_role"
              defaultValue="primary main"
            />
          </div>

          {/* {Hex-Input} */}
          <div className="colorForm_field">
            <label htmlFor="hex" className="colorForm_hex">
              HEX
            </label>
            <ColorInput
              id={"hex"}
              defaultValue={"#000000"}
              hex={"#000000"}
              contrastText={"#FFFFFF"}
            ></ColorInput>
          </div>

          {/* {contrastText-Input} */}
          <div className="colorForm_field">
            <label htmlFor="contrastText" className="colorForm_contrastText">
              CONTRAST TEXT
            </label>
            <ColorInput
              id={"contrastText"}
              defaultValue={"#000000"}
              hex={"#000000"}
              contrastText={"#FFFFFF"}
            ></ColorInput>
          </div>
        </div>
        <button className="colorForm_button" type="submit">
          JETZT WIRDS BUNT
        </button>
      </form>
    </>
  );
}
