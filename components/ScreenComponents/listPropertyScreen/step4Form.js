import React, { useState, useEffect } from "react";
import classes from "./formStyle.module.css";
import toast, { Toaster } from "react-hot-toast";

function Step4Form({
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

  setServantView,
  setStoreRoom,
  servantView,
  storeRoom,
  setSeparateDining,
  separateDining,

  setPropertyMeta
}) {
  const toggleNextStep = async () => {
    console.log('toggle step called')
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
    } else if (!storeRoom) {
      error("Enter number of store rooms");
      return;
    } else if (!separateDining) {
      error("Enter separate dining");
      return;
    }

    // else if (servantView) {
    //   error("Enter servant view");
    //   return;
    // } 
    var tempMeta = [];

    for (let i = 0; i < bedrooms; i++) {
      tempMeta.push('Bedroom # '+(i+1));
    }

    for (let i = 0; i < bathrooms; i++) {
      tempMeta.push('Bathroom # '+(i+1));
    }

    for (let i = 0; i < kitchen; i++) {
      tempMeta.push('Kitchen # '+(i+1));
    }

    for (let i = 0; i < drawingRoom; i++) {
      tempMeta.push('Drawing Room # '+(i+1));
    }

    for (let i = 0; i < parking; i++) {
      tempMeta.push('Parking # '+(i+1));
    }

    for (let i = 0; i < lounge; i++) {
      tempMeta.push('Lounge # '+(i+1));
    }
    for (let i = 0; i < storeRoom; i++) {
      tempMeta.push('Store Room # '+(i+1));
    }
    for (let i = 0; i < separateDining; i++) {
      tempMeta.push('Separate Dining # '+(i+1));
    }

    // ['Bedroom # 1', 'Bathroom # 1', 'Kitchen # 1', 'Drawing Room # 1', 'Parking # 1', 'Lounge # 1', 'Store Room # 1', 'Separate Dining # 1']

    setPropertyMeta(tempMeta);

    // console.log('Meta Data', tempMeta)

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

      {/* <div className={classes.double_input_container}>
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
      </div> */}

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
