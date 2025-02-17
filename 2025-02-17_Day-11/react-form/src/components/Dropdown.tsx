import React from "react";
import { DropdownType } from "./types";

const Dropdown = (props: DropdownType) => {
  return (
    <div className={props.containerClassName || "form-group row m-2"}>
      <label
        htmlFor={props.name}
        className={props.labelClassName || "col-sm-3 col-form-label"}
      >
        {props.labelText}
      </label>
      <select
        name={props.name}
        id={props.id}
        className={props.selectClassName || "col-sm-9"}
      >
        {props.options.map((optionName, index) => (
          <option value={optionName.toLowerCase()} key={index}>
            {optionName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
