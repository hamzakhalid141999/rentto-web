import React, { useState, useEffect } from "react";
import classes from "./list_property.module.css";
import bottom_right_pattern from "../../public/assets/list_property/bottom_right_pattern.svg";
import top_left_pattern from "../../public/assets/list_property/top_left_pattern.svg";
import Step1Form from "../../components/ScreenComponents/listPropertyScreen/step1Form";
import Step2Form from "../../components/ScreenComponents/listPropertyScreen/step2Form";
import Step3Form from "../../components/ScreenComponents/listPropertyScreen/step3Form";
import Step4Form from "../../components/ScreenComponents/listPropertyScreen/step4Form";
import Step5Form from "../../components/ScreenComponents/listPropertyScreen/step5Form";
import Step6Form from "../../components/ScreenComponents/listPropertyScreen/step6Form";
import ReviewProperty from "../../components/modal/reviewProperty";

function ListProperty() {
  const [activeStep, setActiveStep] = useState(6);
  const [features, setFeatures] = useState([
    "Laundry",
    "Backyard",
    "Patio",
    "Pool",
    "Basement",
    "Intercom",
    "Stove",
  ]);
  const [featuresSelected, setFeaturesSelected] = useState([]);
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [propertyType, setPropertyType] = useState("residential");
  const [propertyTypeText, setPropertyTypeText] = useState();
  const [propertySize, setPropertySize] = useState();
  const [expectedRent, setExpectedRent] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [bathrooms, setBathrooms] = useState();
  const [lounge, setLounge] = useState();
  const [kitchen, setKitchen] = useState();
  const [drawingRoom, setDrawingRoom] = useState();
  const [parking, setParking] = useState();
  const [builtIn, setBuiltIn] = useState();
  const [propertyFinish, setPropertyFinish] = useState();
  const [flooring, setFlooring] = useState();
  const [locality, setLocality] = useState();
  const [view, setView] = useState();
  const [servantView, setServantView] = useState();
  const [storeRoom, setStoreRoom] = useState();
  const [separateDining, setSeparateDining] = useState();

  const [filesArr, setFilesArr] = useState([]);
  const [filesArrBathroom, setFilesArrBathroom] = useState([]);
  const [filesArrDining, setFilesArrDining] = useState([]);

  const [section, setSection] = useState("bedroom");
  const [open, setOpen] = useState();

  const handleOpenModal = async () => {
    setOpen(true);
  };

  const handleCloseModal = async () => {
    setOpen(false);
  };

  const handleDataUpload = () => {
    console.log("filesArr", filesArr);
  };

  handleDataUpload();

  const handleActiveStep = async (value) => {
    if (value < activeStep) {
      setActiveStep(value);
    }
  };

  console.log(section);

  return (
    <div className={classes.list_property_section}>
      <ReviewProperty
        features={features}
        address={address}
        propertyType={propertyType}
        propertyTypeText={propertyTypeText}
        propertySize={propertySize}
        expectedRent={expectedRent}
        bedrooms={bedrooms}
        bathrooms={bathrooms}
        lounge={lounge}
        kitchen={kitchen}
        drawingRoom={drawingRoom}
        parking={parking}
        builtIn={builtIn}
        propertyFinish={propertyFinish}
        flooring={flooring}
        locality={locality}
        view={view}
        servantView={servantView}
        storeRoom={storeRoom}
        separateDining={separateDining}
        filesArr={filesArr}
        filesArrBathroom={filesArrBathroom}
        filesArrDining={filesArrDining}
        city={city}
        open={open}
        onCloseModal={handleCloseModal}
      />
      <div className={classes.left_panel}>
        <img src={top_left_pattern.src} className={classes.top_left} />
        <img src={bottom_right_pattern.src} className={classes.bottom_right} />
        <h2>Hire Rentto</h2>
        <h3>Lorem Ipsum Dolor Set</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <div className={classes.btn_filled}>
          <p>Rentto Assistance</p>
        </div>
      </div>

      <div className={classes.right_panel}>
        <h2 className={classes.heading}>List Property For Rent</h2>
        <p className={classes.sub_heading}>
          LET RENTTO LIST YOUR PROPERTY <span>(RECOMMENDED)</span>
        </p>

        <div className={classes.stepper_container}>
          <div
            onClick={() => {
              handleActiveStep(1);
            }}
            style={{ marginLeft: "0px" }}
            className={
              activeStep > 1
                ? classes.step_done
                : activeStep === 1 && classes.step_active
            }
          >
            <p>1</p>
          </div>
          <div className={classes.dashed_line} />
          <div
            onClick={() => {
              handleActiveStep(2);
            }}
            className={
              activeStep > 2
                ? classes.step_done
                : activeStep === 2
                ? classes.step_active
                : activeStep < 2 && classes.step_inactive
            }
          >
            <p>2</p>
          </div>
          <div className={classes.dashed_line} />

          <div
            onClick={() => {
              handleActiveStep(3);
            }}
            className={
              activeStep > 3
                ? classes.step_done
                : activeStep === 3
                ? classes.step_active
                : activeStep < 3 && classes.step_inactive
            }
          >
            <p>3</p>
          </div>
          <div className={classes.dashed_line} />

          <div
            onClick={() => {
              handleActiveStep(4);
            }}
            className={
              activeStep > 4
                ? classes.step_done
                : activeStep === 4
                ? classes.step_active
                : activeStep < 4 && classes.step_inactive
            }
          >
            <p>4</p>
          </div>
          <div className={classes.dashed_line} />

          <div
            onClick={() => {
              handleActiveStep(5);
            }}
            className={
              activeStep > 5
                ? classes.step_done
                : activeStep === 5
                ? classes.step_active
                : activeStep < 5 && classes.step_inactive
            }
          >
            <p>5</p>
          </div>
          <div className={classes.dashed_line} />

          <div
            onClick={() => {
              handleActiveStep(6);
            }}
            className={
              activeStep > 6
                ? classes.step_done
                : activeStep === 6
                ? classes.step_active
                : activeStep < 6 && classes.step_inactive
            }
          >
            <p>6</p>
          </div>
        </div>
        {activeStep === 1 ? (
          <Step1Form
            setPropertyType={setPropertyType}
            propertyType={propertyType}
            setActiveStep={setActiveStep}
            setCity={setCity}
            setAddress={setAddress}
            city={city}
            address={address}
          />
        ) : activeStep === 2 ? (
          <Step2Form
            setPropertyTypeText={setPropertyTypeText}
            setPropertySize={setPropertySize}
            setExpectedRent={setExpectedRent}
            propertySize={propertySize}
            propertyTypeText={propertyTypeText}
            expectedRent={expectedRent}
            setActiveStep={setActiveStep}
          />
        ) : activeStep === 3 ? (
          <Step3Form
            setBedrooms={setBedrooms}
            setBathrooms={setBathrooms}
            setLounge={setLounge}
            setKitchen={setKitchen}
            setDrawingRoom={setDrawingRoom}
            setParking={setParking}
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            lounge={lounge}
            kitchen={kitchen}
            drawingRoom={drawingRoom}
            parking={parking}
            setActiveStep={setActiveStep}
          />
        ) : activeStep === 4 ? (
          <Step4Form
            setBuiltIn={setBuiltIn}
            setPropertyFinish={setPropertyFinish}
            setFlooring={setFlooring}
            setLocality={setLocality}
            setView={setView}
            setServantView={setServantView}
            setStoreRoom={setStoreRoom}
            setSeparateDining={setSeparateDining}
            builtIn={builtIn}
            propertyFinish={propertyFinish}
            flooring={flooring}
            locality={locality}
            view={view}
            servantView={servantView}
            storeRoom={storeRoom}
            separateDining={separateDining}
            setActiveStep={setActiveStep}
          />
        ) : activeStep === 5 ? (
          <Step5Form
            features={features}
            setFeatures={setFeatures}
            setActiveStep={setActiveStep}
            setFeaturesSelected={setFeaturesSelected}
            featuresSelected={featuresSelected}
          />
        ) : activeStep === 6 ? (
          <>
            <Step6Form
              setFilesArr={setFilesArr}
              filesArr={filesArr}
              setFilesArrBathroom={setFilesArrBathroom}
              filesArrBathroom={filesArrBathroom}
              setFilesArrDining={setFilesArrDining}
              filesArrDining={filesArrDining}
              setActiveStep={setActiveStep}
              setSection={setSection}
              section={section}
              handleOpenModal={handleOpenModal}
              open={open}
              handleCloseModal={handleCloseModal}
            />

            <div
              // onClick={toggleNextStep}
              className={classes.btn_filled}
            >
              <p>Upload</p>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ListProperty;
