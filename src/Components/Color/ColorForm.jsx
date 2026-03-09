import "./ColorForm.css";
import ColorInput from "./ColorInput";

//Hier wird das Formular erstellt, die Daten ausgelesen und die onSubmit Funktion aus dem App.jsx aufgerufen mit den ausgelesenen Daten

export default function ColorForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmit(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="colorForm__fields">
          {/* {Role-Input} */}
          <div className="colorForm_field">
            <label htmlFor="colorForm__input_role" className="colorForm__lable">
              ROLE
            </label>
            {/* name den ich hier vergebe wird der kex vom objekt, 
            den ich dann beim returnen und mappen aufrufen muss----> siehe ColorCard.jsx */}
            <input
              type="text"
              name="role"
              id="colorForm__input_role"
              defaultValue="primary main"
            />
          </div>

          {/* {Hex-Input} */}
          <div className="colorForm_field">
            <label htmlFor="hex" className="colorForm__hex">
              HEX
            </label>
            <ColorInput id={"hex"} defaultValue={"#000000"}></ColorInput>
          </div>

          {/* {contrastText-Input} */}
          <div className="colorForm_field">
            <label htmlFor="contrastText" className="colorForm__contrastText">
              CONTRAST TEXT
            </label>
            <ColorInput
              id={"contrastText"}
              defaultValue={"#000000"}
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
