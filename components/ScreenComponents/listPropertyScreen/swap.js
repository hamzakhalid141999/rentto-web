import React, { useState, useEffect } from "react";
import classes from "./formStyle.module.css";
import toast, { Toaster } from "react-hot-toast";

function Step3Form({
  setActiveStep,
  setBedrooms,
  setBathrooms,
  setLounge,
  setKitchen,
  setDrawingRoom,
  setParking,
  bedrooms,
  bathrooms,
  lounge,
  kitchen,
  drawingRoom,
  parking,
}) {
  const toggleNextStep = async () => {
    if (!bedrooms) {
      error("Enter number of bedrooms");
      return;
    } else if (!bathrooms) {
      error("Enter number of bathrooms");
      return;
    } else if (!kitchen) {
      error("Enter number of kitchen");
      return;
    } else if (!drawingRoom) {
      error("Enter number of drawing rooms");
      return;
    } else if (!parking) {
      error("Enter parking");
      return;
    } else if (!lounge) {
      error("Enter lounge");
      return;
    }
    setActiveStep(4);
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

      <h2 className={classes.form_heading}>Property Specifications</h2>

      <div className={classes.double_input_container}>
        <div className={classes.input_container}>
          <p>Bedrooms</p>
          <input
            type={"number"}
            onChange={(e) => {
              setBedrooms(e.target.value);
            }}
            value={bedrooms}
            placeholder="Enter the number of bedrooms"
            className={classes.input_field}
          />
        </div>
        <div className={classes.input_container}>
          <p>Bathrooms</p>
          <input
            type={"number"}
            onChange={(e) => {
              setBathrooms(e.target.value);
            }}
            value={bathrooms}
            placeholder="Enter the number of bathrooms"
            className={classes.input_field}
          />
        </div>
      </div>

      <div className={classes.double_input_container}>
        <div className={classes.input_container}>
          <p>Longue</p>
          <input
            type={"number"}
            onChange={(e) => {
              setLounge(e.target.value);
            }}
            value={lounge}
            placeholder="Enter the number of lounge"
            className={classes.input_field}
          />
        </div>
        <div className={classes.input_container}>
          <p>Kitchen</p>
          <input
            type={"number"}
            onChange={(e) => {
              setKitchen(e.target.value);
            }}
            value={kitchen}
            placeholder="Enter the number of kitchen"
            className={classes.input_field}
          />
        </div>
      </div>

      <div className={classes.double_input_container}>
        <div className={classes.input_container}>
          <p>Drawing Room</p>
          <input
            type={"number"}
            onChange={(e) => {
              setDrawingRoom(e.target.value);
            }}
            value={drawingRoom}
            placeholder="Enter the number of rooms"
            className={classes.input_field}
          />
        </div>
        <div className={classes.input_container}>
          <p>Parking</p>
          <input
            type={"number"}
            onChange={(e) => {
              setParking(e.target.value);
            }}
            value={parking}
            placeholder="Enter the number of parkings"
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

export default Step3Form;
