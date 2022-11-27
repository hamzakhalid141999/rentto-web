import React, { useState, useEffect } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import toast, { Toaster } from "react-hot-toast";
import classes from "./formStyle.module.css";

function Step5Form({
  setActiveStep,
  setFeatures,
  features,
  setFeaturesSelected,
  featuresSelected,
}) {
  const toggleNextStep = async () => {
    if (!features) {
      error("Enter features");
      return;
    }

    setActiveStep(6);
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

  const handleSelectFeature = async (feature) => {
    setFeaturesSelected((featureArr) => [...featureArr, feature]);
  };

  return (
    <div className={classes.form_body}>
      <Toaster />

      <h2 className={classes.form_heading}>Property Specifications</h2>

      <div style={{ width: "100%" }} className={classes.input_container}>
        <p style={{ marginLeft: "0px" }}>Property Features</p>

        <ReactTagInput
          tags={featuresSelected}
          maxTags={50}
          removeOnBackspace={true}
          className={classes.input_field}
          placeholder="Select features below"
          onChange={(newTags) => {
            newTags = newTags.map(function (item) {
              return item.replace(/\s+/g, "");
            });
            var arr = newTags.filter((e) => String(e).trim());
            setFeaturesSelected(arr);
          }}
        />
      </div>

      <div className={classes.tags_container}>
        {features?.map((feature, index) => (
          <div
            onClick={() => {
              handleSelectFeature(feature);
            }}
            key={index}
            className={classes.tag}
          >
            <p>{feature}</p>
          </div>
        ))}
      </div>

      {/* <div
        style={{ width: "100%", marginTop: "50px" }}
        className={classes.input_container}
      >
        <p style={{ marginLeft: "0px" }}>Property Features</p>

        <ReactTagInput
          tags={featuresSelected}
          maxTags={50}
          removeOnBackspace={true}
          className={classes.input_field}
          placeholder="Select features below"
          onChange={(newTags) => {
            newTags = newTags.map(function (item) {
              return item.replace(/\s+/g, "");
            });
            var arr = newTags.filter((e) => String(e).trim());
            setFeaturesSelected(arr);
          }}
        />
      </div>

      <div className={classes.tags_container}>
        {features?.map((feature, index) => (
          <div
            onClick={() => {
              handleSelectFeature(feature);
            }}
            key={index}
            className={classes.tag}
          >
            <p>{feature}</p>
          </div>
        ))}
      </div> */}

      <p className={classes.terms_services_text}>
        By proceeding you agree to Rentto’s <span>Terms of Service</span> and{" "}
        <span>Privacy Policy.</span>
      </p>
      <div
        style={{ paddingLeft: "initial", marginLeft: "initial" }}
        onClick={toggleNextStep}
        className={classes.btn_filled}
      >
        <p>NEXT</p>
      </div>
    </div>
  );
}

export default Step5Form;
