import React, { useState, useEffect } from "react";
import classes from "./formStyle.module.css";
import toast, { Toaster } from "react-hot-toast";

function Step2Form({
  setActiveStep,
  setPropertySize,
  setExpectedRent,
  setPropertyTypeText,
  propertySize,
  propertyTypeText,
  expectedRent,
}) {
  const toggleNextStep = async () => {
    if (!propertyTypeText) {
      error("Enter property type");
      return;
    } else if (!propertySize) {
      error("Enter property size");
      return;
    } else if (!expectedRent) {
      error("Enter expected rent");
      return;
    }

    setActiveStep(3);
  };

  const error = (msg) => {
    toast.error(msg, {
      style: {
        background: "white",
        color: "red",
        border: "1px solid #ff9000",
      },
      position: "bottom-right",
    });
  };

  return (
    <div className={classes.form_body}>
      <Toaster />
      <h2 className={classes.form_heading}>Property Details</h2>

      <div className={classes.input_container}>
        <p>Property Type</p>
        <input
          onChange={(e) => {
            setPropertyTypeText(e.target.value);
          }}
          value={propertyTypeText}
          placeholder="Enter property Type"
          className={classes.input_field}
        />
      </div>
      <div className={classes.input_container}>
        <p>Property Size</p>
        <div className={classes.input_field_container}>
          <p className={classes.input_field_right_label}>Sq Ft</p>
          <input
            onChange={(e) => {
              setPropertySize(e.target.value);
            }}
            type={"number"}
            value={propertySize}
            placeholder="e.g 2000"
            className={classes.input_field}
          />
        </div>
      </div>

      <div className={classes.input_container}>
        <p>Expected Rent</p>
        <div className={classes.input_field_container}>
          <p className={classes.input_field_right_label}>Per Month</p>
          <input
            type={"number"}
            onChange={(e) => {
              setExpectedRent(e.target.value);
            }}
            value={expectedRent}
            placeholder="e.g 120,000"
            className={classes.input_field}
          />
        </div>
      </div>

      <p className={classes.terms_services_text}>
        By proceeding you agree to Rentto’s <span>Terms of Service</span> and{" "}
        <span>Privacy Policy.</span>
      </p>
      <div onClick={toggleNextStep} className={classes.btn_filled}>
        <p>NEXT</p>
      </div>
    </div>
  );
}

export default Step2Form;
