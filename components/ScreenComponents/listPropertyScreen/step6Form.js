import React, { useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import image_placeholder from "../../../public/assets/list_property/image_placeholder.svg";
import classes from "./formStyle.module.css";
import toast, { Toaster } from "react-hot-toast";

function Step6Form({ setActiveStep, filesArr, setFilesArr, setSection }) {
  const [adLife, setAdLife] = useState(22);
  const [adLifeTier, setAdLifeTier] = useState(60);
  const [percentage, setPercetage] = useState();

  const handleChange = (file) => {
    for (var i = 0; i < file?.length; i++) {
      const fileObj = file[i];
      console.log(fileObj);

      setFilesArr((arr) => [...arr, fileObj]);
    }
  };

  useEffect(() => {
    var perc = (adLife / adLifeTier) * 100;
    setPercetage(perc.toFixed(1) + "%");
  }, []);

  console.log(percentage);

  const toggleNextStep = async () => {
    // setActiveStep(7);
  };
  const fileTypes = ["JPEG", "PNG", "GIF"];

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

      <h2 className={classes.form_heading}>Add Images</h2>
      <div className={classes.add_life}>
        <div className={classes.add_life_inner}>
          <p className={classes.ad_life_text}>Ad life</p>

          <div
            style={{ width: percentage }}
            className={classes.life_progress_bar}
          >
            <p style={{ color: "white" }} className={classes.ad_life_progress}>
              20/60 Days
            </p>
          </div>
        </div>
      </div>
      <div className={classes.input_container}>
        <p>Choose Section</p>

        <select
          style={{ marginLeft: "0px" }}
          onClick={(e) => {
            setSection(e.target.value);
          }}
          className={classes.input_field}
          type={"text"}
        >
          <option>Bedroom</option>
          <option>Dining</option>
          <option>Bathroom</option>
        </select>
      </div>

      <div className={classes.file_dropper_section}>
        <div className={classes.dropper_content}>
          <img src={image_placeholder.src} className={classes.placeholder} />
          <p className={classes.drag_img_text}>
            Choose or drag and drop images of your property
          </p>
          <p className={classes.choose_image_text}>Choose Image</p>
        </div>
        <FileUploader
          multiple={true}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          onTypeError={() => {
            error("Format not supported");
          }}
        />
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

export default Step6Form;
