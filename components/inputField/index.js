import React, { useState } from "react";
import classes from "./inputField.module.css";

function InputField({ label, type, lightMode, setValue, error, value }) {
  return (
    <>
      <div className={error ? classes.label_float_red : classes.label_float}>
        <input
          autoComplete="new-password"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          type={type}
          placeholder=" "
        />
        <label>{label}</label>
      </div>
    </>
  );
}

export default InputField;
