import React, {useState} from "react";

const Textinput = () => {
    const [nameField, setNameField] = useState("");
  return (
    <>
      <div className="card">
        <input
          className="form-control"
          type="text"
          placeholder="Enter your text here ..."
          value={nameField}
          onChange={(e) => setNameField(e.target.value)}
        />
        <p>{nameField}</p>
      </div>
    </>
  );
};

export default Textinput;
