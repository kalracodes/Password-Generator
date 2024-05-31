import React, { useState } from "react";

const CheckBoxContainer = (props: {
  onCheckboxChange: (arg0: {
    upper: boolean;
    lower: boolean;
    number: boolean;
    symbol: boolean;
  }) => void;
}) => {
  const [checkboxState, setCheckboxSate] = useState({
    upper: false,
    lower: false,
    number: false,
    symbol: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setCheckboxSate((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  props.onCheckboxChange(checkboxState);

  return (
    <div className="CheckBoxContainer">
      <div className="CheckBox">
        <input
          type="checkbox"
          id="upper"
          checked={checkboxState.upper}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="upper">Include Uppercase Letters</label>
      </div>
      <div className="CheckBox">
        <input
          type="checkbox"
          id="lower"
          checked={checkboxState.lower}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="lower">Include Lowercase Letters</label>
      </div>
      <div className="CheckBox">
        <input
          type="checkbox"
          id="number"
          checked={checkboxState.number}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="number">Include Numbers</label>
      </div>
      <div className="CheckBox">
        <input
          type="checkbox"
          id="symbol"
          checked={checkboxState.symbol}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="symbol">Include Symbols</label>
      </div>
    </div>
  );
};

export default CheckBoxContainer;
