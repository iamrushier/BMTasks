import React from "react";
import { TextAreaType } from "./types";

const TextArea = (props: TextAreaType) => {
  return (
    <div className={props.containerClassName || "form-group row m-2"}>
      <label
        htmlFor={props.name}
        className={props.labelClassName || "col-sm-3 col-form-label"}
      >
        {props.labelText}
      </label>
      <textarea
        name={props.name}
        id={props.id}
        placeholder={
          props.placeholder || `Enter ${props.labelText.toLowerCase()}`
        }
        cols={props.cols || 30}
        rows={props.rows || 5}
        className={props.textareaClassName || "col-sm-9"}
      ></textarea>
    </div>
  );
};

export default TextArea;
