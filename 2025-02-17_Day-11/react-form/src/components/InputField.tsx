import React from "react";
import { InputFieldType } from "./types";

const InputField = (props: InputFieldType) => {
  return (
    <div className={props.containerClassName ?? "form-group row m-2"}>
      <label
        htmlFor={props.name}
        className={props.labelClassName || "col-sm-3 col-form-label"}
      >
        {props.labelText}
      </label>
      <input
        type={props.type}
        id={props.id}
        className={props.inputClassName || "col-sm-9"}
        placeholder={
          props.placeholder || `Enter ${props.labelText.toLowerCase()}`
        }
        name={props.name}
      />
    </div>
  );
};

export default InputField;
