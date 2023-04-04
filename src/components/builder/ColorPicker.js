import React from "react";

const ColorPicker = ({ colors, setStyle, style }) => {
  return (
    <div>
      {" "}
      <div className="d-flex flex-row px-5">
        {colors.map((color, i) => {
          return (
            <div className="form-check p-1" key={i}>
              <input
                type="radio"
                name="flexRadioDefault"
                defaultChecked={color === "black"}
                className="form-check-input"
                style={{ backgroundColor: color }}
                onChange={() => setStyle({ ...style, headerColor: color })}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorPicker;
