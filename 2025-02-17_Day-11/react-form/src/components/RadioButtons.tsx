import React from "react";
import { RadioButtonsType } from "./types";

const RadioButtons = (props: RadioButtonsType) => {
  return (
    <div className={props.containerClassName || "form-group row m-2"}>
      <label
        htmlFor={props.labelText}
        className={props.labelClassName || "col-sm-3 col-form-label"}
      >
        {props.labelText}
      </label>
      <div
        className={
          props.radioGroupClassName || "options col-sm-9 m-auto d-flex"
        }
      >
        {props.options.map((option, index) => (
          <span className={props.radioItemClassName || "me-5"} key={index}>
            <input type="radio" name={props.name} /> {option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RadioButtons;
