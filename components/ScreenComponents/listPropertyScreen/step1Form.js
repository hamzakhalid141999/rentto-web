import React, { useState, useEffect } from "react";
import classes from "./formStyle.module.css";
import toast, { Toaster } from "react-hot-toast";

function Step1Form({
  setActiveStep,
  setPropertyType,
  propertyType,
  setCity,
  setAddress,
  address,
  city,
}) {
  const handleTogglePropertyType = async (value) => {
    setPropertyType(value);
  };

  const toggleNextStep = async () => {
    if (!propertyType) {
      error("Select property type");
      return;
    } else if (!city) {
      error("Enter city");
      return;
    } else if (!address) {
      error("Enter address");
      return;
    }

    setActiveStep(2);
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
      <p className={classes.subheading}>Property Type</p>

      <div className={classes.property_btns_container}>
        <div
          onClick={() => handleTogglePropertyType("residential")}
          className={
            propertyType === "residential"
              ? classes.btn_selected
              : classes.btn_unselected
          }
        >
          <p>Residential</p>
        </div>
        <div
          onClick={() => handleTogglePropertyType("commercial")}
          className={
            propertyType === "commercial"
              ? classes.btn_selected
              : classes.btn_unselected
          }
        >
          <p>Commercial</p>
        </div>
      </div>

      <div className={classes.input_container}>
        <p>City</p>
        <select
          style={{ width: "104%" }}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          value={city}
          className={classes.input_field}
        >
          <option disabled>Select the city of your listing</option>
          <option value={"islamabad"}>Islamabad</option>
          <option value={"rawalpindi"}>Rawalpindi</option>
          <option value={"lahore"}>Lahore</option>
          <option value={"peshawar"}>Peshawar</option>
          <option value={"karachi"}>Karachi</option>
          <option value={"quetta"}>Quetta</option>
          <option value={"faisalabad"}>Faisalabad</option>
          <option value={"banigala"}>Bani Gala</option>
        </select>
      </div>
      <div className={classes.input_container}>
        <p>Address</p>
        <input
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          value={address}
          placeholder="Enter the address of your listing"
          className={classes.input_field}
        />
      </div>
      <p className={classes.terms_services_text}>
        By proceeding you agree to Rentto’s <span>Terms of Service</span> and{" "}
        <span>Privacy Policy.</span>
      </p>
      <div onClick={toggleNextStep} className={classes.btn_filled}>
        <p>PROCEED</p>
      </div>
    </div>
  );
}

export default Step1Form;
