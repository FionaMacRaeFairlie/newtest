import React ,{useState} from "react";

const Textinput = () => {
    const [nameField, setNameField] = useState("");
  return (
    <>
      <div className="card">
        <input
          className="form-control"
          type="text"
          placeholder="Enter your name here ..."
          value={nameField}
          onChange={(e) => setNameField(e.target.value)}
        />
        <p className="coloredtext">{nameField}</p>
      </div>
    </>
  );
};

export default Textinput;
