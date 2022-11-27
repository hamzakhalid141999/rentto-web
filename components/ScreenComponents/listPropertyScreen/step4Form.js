import React, { useState, useEffect } from "react";
import classes from "./formStyle.module.css";
import toast, { Toaster } from "react-hot-toast";

function Step4Form({
  setActiveStep,
  setBuiltIn,
  setPropertyFinish,
  setFlooring,
  setLocality,
  setView,
  setServantView,
  setStoreRoom,
  builtIn,
  propertyFinish,
  flooring,
  locality,
  view,
  servantView,
  storeRoom,
  setSeparateDining,
  separateDining,
}) {
  const toggleNextStep = async () => {
    if (!builtIn) {
      error("Enter built year");
      return;
    } else if (!propertyFinish) {
      error("Enter property finish year");
      return;
    } else if (!flooring) {
      error("Enter flooring");
      return;
    } else if (!locality) {
      error("Enter locality");
      return;
    } else if (!view) {
      error("Enter view");
      return;
    } else if (!servantView) {
      error("Enter servant view");
      return;
    } else if (!storeRoom) {
      error("Enter number of store rooms");
      return;
    } else if (!separateDining) {
      error("Enter separate dining");
      return;
    }
    setActiveStep(5);
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

      <div className={classes.double_input_container}>
        <div className={classes.input_container}>
          <p>Built in</p>
          <select
            onChange={(e) => {
              setBuiltIn(e.target.value);
            }}
            value={builtIn}
            placeholder="Enter the number of bedrooms"
            className={classes.input_field}
          >
            <option>Select Built Year</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className={classes.input_container}>
          <p>Property Finish</p>
          <select
            onChange={(e) => {
              setPropertyFinish(e.target.value);
            }}
            value={propertyFinish}
            placeholder="Enter the number of bathrooms"
            className={classes.input_field}
          >
            <option disabled>Select Finish Year</option>
            <option value={true}>Furnished</option>
            <option value={false}>Unfurnished</option>
          </select>
        </div>
      </div>

      <div className={classes.double_input_container}>
        <div className={classes.input_container}>
          <p>Flooring</p>
          <select
            onChange={(e) => {
              setFlooring(e.target.value);
            }}
            value={flooring}
            placeholder="Enter the number of lounge"
            className={classes.input_field}
          >
            <option>Select Floorings</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className={classes.input_container}>
          <p>Locality</p>
          <select
            onChange={(e) => {
              setLocality(e.target.value);
            }}
            value={locality}
            placeholder="Enter the number of kitchen"
            className={classes.input_field}
          >
            {" "}
            <option>Select Locality</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>

      <div className={classes.double_input_container}>
        <div className={classes.input_container}>
          <p>View</p>
          <select
            onChange={(e) => {
              setView(e.target.value);
            }}
            value={view}
            placeholder="Enter the number of rooms"
            className={classes.input_field}
          >
            <option>Select View</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className={classes.input_container}>
          <p>Servant Room</p>
          <input
            onChange={(e) => {
              setServantView(e.target.value);
            }}
            value={servantView}
            placeholder="Enter the number of servant rooms"
            className={classes.input_field}
          />
        </div>
      </div>

      <div className={classes.double_input_container}>
        <div className={classes.input_container}>
          <p>Store Room</p>
          <input
            onChange={(e) => {
              setStoreRoom(e.target.value);
            }}
            value={storeRoom}
            placeholder="Enter the number of store rooms"
            className={classes.input_field}
          />
        </div>
        <div className={classes.input_container}>
          <p>Separate Dining Room</p>
          <input
            onChange={(e) => {
              setSeparateDining(e.target.value);
            }}
            value={separateDining}
            placeholder="Enter the number of dinings"
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

export default Step4Form;
