import React from "react";
import { InputFieldType } from "./types";

const InputField = ({ name, type, id, labelText, ...rest }: InputFieldType) => {
  return (
    <div className={rest.containerClassName ?? "form-group row m-2"}>
      <label
        htmlFor={name}
        className={rest.labelClassName || "col-sm-3 col-form-label"}
      >
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        className={rest.inputClassName || "col-sm-9"}
        placeholder={rest.placeholder || `Enter ${labelText.toLowerCase()}`}
        name={name}
        {...rest}
      />
    </div>
  );
};

export default InputField;
