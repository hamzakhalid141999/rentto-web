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
  const [furnishingFeatures, setFurnishingFeatures] = useState([
    "Dryer",
    "Washing Machine",
    "Microwave",
    "Electriv Kettle",
    "Refrigerator",
    "Dish Washer",
    "Closets",
    "Dining Table",
    "Dinner Set",
    "Tables",
    "Sofas",
    "Chairs",
    "Tea Set",
    "Coffee Maker",
    "Study Table",
    "Cable/Dish",
    "Music System",
  ]);
  const [featuresSelected, setFeaturesSelected] = useState([]);
  const [furnishingFeaturesSelected, setFurnishingFeaturesSelected] = useState(
    []
  );
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
  const [propertyFinish, setPropertyFinish] = useState(true);
  const [flooring, setFlooring] = useState();
  const [locality, setLocality] = useState();
  const [view, setView] = useState();
  const [servantView, setServantView] = useState();
  const [storeRoom, setStoreRoom] = useState();
  const [separateDining, setSeparateDining] = useState();

  const [propertyMeta, setPropertyMeta] = useState([]);


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
        featuresSelected={featuresSelected}
        furnishingFeaturesSelected={furnishingFeaturesSelected}
        furnishingFeatures={furnishingFeatures}
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
        
       {activeStep === 1 ? (<h2>Property Details</h2>)
        : activeStep === 2? (<h2>Property Details</h2>)
        : activeStep === 3? (<h2>Property Specification</h2>)
        : activeStep === 4 ? (<h2>Property Features</h2>)
        : activeStep === 5 ? (<h2>Property Features</h2>)
        : activeStep === 6 ? (<h2>Property Photos</h2>) : (null)
        }

      {activeStep === 1 ? (<h3>Step 1</h3>)
        : activeStep === 2? (<h3>Step 2</h3>)
        : activeStep === 3? (<h3>Step 3</h3>)
        : activeStep === 4 ? (<h3>Step 4</h3>)
        : activeStep === 5 ? (<h3>Step 5</h3>)
        : activeStep === 6 ? (<h3>Step 6</h3>) : (null)
        }

      {activeStep === 1 ? (<p>Property Owners provide the general information of their Rental Property in order to determine the Property Type and verify its Location</p>)
        : activeStep === 2? (<p>Property Owners provide specific property details to determine the Property Category, Property Size and its Expected Rent </p>)
        : activeStep === 3? (<p>Property Owners ascertain the Property Specifications by clicking on each of the tabs to confirm the number of components present in the property </p>)
        : activeStep === 4 ? (<p>Property Details that are essential to develop a better understanding of the condition of the Property and its locality will be provided here</p>)
        : activeStep === 5 ? (<p>Property Owners can select the available amenities in the property to give a better idea of the overall features the property possesses </p>)
        : activeStep === 6 ? (<p>Good photographs will not only add to the appeal of the Property Listing but will also increaase its Ad life. For specification provided previously add the relevant photographs. For guidlines click here  </p>) : (null)
        }
        
        
        

        
        
        <div className={classes.btn_filled}>
          <p>Rentto Assistance</p>
        </div>

        <p className={classes.sub_heading}>
          {/* <p >For Property Owners seeking assistance in uploading their Property Listings</p> */}
          For Property Owners seeking assistance in uploading their Property Listings
        </p>

        
        {/* <p >For Property Owners seeking assistance in uploading their Property Listings</p> */}
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
        ) : activeStep === 4 ? (
          <Step4Form
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

            setSeparateDining={setSeparateDining}
            setServantView={setServantView}
            setStoreRoom={setStoreRoom}
            view={view}
            servantView={servantView}
            storeRoom={storeRoom}
            separateDining={separateDining}
            setPropertyMeta={setPropertyMeta}
            // setActiveStep={setActiveStep}
          />
        ) : activeStep === 5 ? (
          <Step5Form
            features={features}
            setFeatures={setFeatures}
            setFurnishingFeatures={setFurnishingFeatures}
            furnishingFeatures={furnishingFeatures}
            setActiveStep={setActiveStep}
            setFeaturesSelected={setFeaturesSelected}
            setFurnishingFeaturesSelected={setFurnishingFeaturesSelected}
            furnishingFeaturesSelected={furnishingFeaturesSelected}
            featuresSelected={featuresSelected}
            propertyFinish={propertyFinish}
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

              propertyMeta={propertyMeta}
            />

            {/* <div
              // onClick={toggleNextStep}
              className={classes.btn_filled}
            >
              <p>Upload</p>
            </div> */}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ListProperty;
