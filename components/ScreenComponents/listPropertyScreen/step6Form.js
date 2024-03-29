import React, { useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import image_placeholder from "../../../public/assets/list_property/image_placeholder.svg";
import classes from "./formStyle.module.css";
import toast, { Toaster } from "react-hot-toast";
import ReviewProperty from "../../modal/reviewProperty/index";
import PictureModal from "../../modal/pictureModal";

import Image from 'next/image';

function Step6Form({
  setActiveStep,
  filesArr,
  setFilesArr,
  setSection,
  open,
  handleOpenModal,
  handleCloseModal,
  setFilesArrBathroom,
  filesArrBathroom,
  setFilesArrDining,
  filesArrDining,
  section,

  propertyMeta,
  setPropertyMetaDetails
}) {

  propertyMeta = ['Bedroom # 1', 'Bathroom # 1', 'Kitchen # 1', 'Drawing Room # 1', 'Parking # 1', 'Lounge # 1', 'Store Room # 1', 'Separate Dining # 1']

  console.log(section);
  const [adLife, setAdLife] = useState(22);
  const [adLifeTier, setAdLifeTier] = useState(60);
  const [percentage, setPercetage] = useState();
  const [openPicModal, setOpenPicModal] = useState();
  const [picture, setPicture] = useState();

  const [propMetaJSON, setPropMetaJSON] = useState([]);
  const [numOfImages, setNumOfImages] = useState([]);

  const onClosePicModal = async () => {
    setOpenPicModal(false);
  };
  const onOpenPicModal = async () => {
    setOpenPicModal(true);
  };

  const handleDeletePicture = (index) => {
    var tempJson = propMetaJSON;

    var tempArr = [];
    
    console.log('tempJson', tempJson);
    tempJson[section]?.map((file, i) => {
      if (i !== index) {
        tempArr.push(file);
      }
    });
    // setFilesArr(tempArr)

    tempJson[section] = tempArr;

    setPropMetaJSON(tempJson);

    setNumOfImages((arr) => [...arr, -1]);

  };


  const handleChange = (file) => {
    // for (var i = 0; i < file?.length; i++) {
    //   const fileObj = file[i];
    //   setFilesArr((arr) => [...arr, fileObj]);
    // }

    var tempJson = propMetaJSON;
    console.log('Before', tempJson);

    console.log('tempJson', tempJson, section);
    for (var i = 0; i < file?.length; i++) {
      const fileObj = file[i];

      

      tempJson[section].push(fileObj)

      
    }

    // console.log(tempJson);

    // tempJson[section]?.map((file, i) => {
    //   if (i !== index) {
    //     tempJson[section].push(file);
    //   }
    // });
    // setFilesArr(tempArr)
    
    setPropMetaJSON(tempJson);

    setNumOfImages((arr) => [...arr, 1]);

    // setPropMetaJSON(tempJson);
  };

  const handleChangeFiles = (file) => {
    for (var i = 0; i < file?.length; i++) {
      const fileObj = file[i];
      setFilesArr((arr) => [...arr, fileObj]);
    }
  };

  const handleAddFile = (e) => {
    // setFilesArr((arr) => [...arr, e]);

    var tempJson = propMetaJSON;
    tempJson[section].push(e)

    // for (var i = 0; i < file?.length; i++) {
    //   const fileObj = file[i];
    //   tempJson[section].push(e)
    // }

    // console.log(tempJson[section]);

    setPropMetaJSON(tempJson);
    setNumOfImages((arr) => [...arr, 1]);

  };

  // Dining Washroom pictures

  const handleDeleteDiningPicture = (index) => {
    var tempArr = [];
    filesArrDining?.map((file, i) => {
      if (i !== index) {
        tempArr.push(file);
      }
    });
    setFilesArrDining(tempArr);
  };

  const handleDiningChange = (file) => {
    for (var i = 0; i < file?.length; i++) {
      const fileObj = file[i];
      setFilesArrDining((arr) => [...arr, fileObj]);
    }
  };

  const handleDiningAddFile = (e) => {
    setFilesArrDining((arr) => [...arr, e]);
  };

  // Bathroom pictures

  const handleDeleteBathroomPicture = (index) => {
    var tempArr = [];
    filesArrBathroom?.map((file, i) => {
      if (i !== index) {
        tempArr.push(file);
      }
    });
    setFilesArrBathroom(tempArr);
  };

  const handleBathroomChange = (file) => {
    for (var i = 0; i < file?.length; i++) {
      const fileObj = file[i];
      setFilesArrBathroom((arr) => [...arr, fileObj]);
    }
  };

  const handleBathroomAddFile = (e) => {
    setFilesArrBathroom((arr) => [...arr, e]);
  };

  useEffect(() => {
    var perc = (adLife / adLifeTier) * 100;
    setPercetage(perc.toFixed(1) + "%");

    var propMetaJSON_ = {}; 
    for (let i = 0; i < propertyMeta.length; i++) {
      // tempMeta.push('Lounge # '+(i+1));

      propMetaJSON_[propertyMeta[i]] = [];
    }
    
    setPropMetaJSON(propMetaJSON_)
    // console.log('propMetaJSON', propMetaJSON)
  }, []);

  const toggleNextStep = async () => {
    // setActiveStep(7);
    console.log('Final step', propMetaJSON);
    setPropertyMetaDetails(propMetaJSON);
    handleOpenModal();
  };

  const fileTypes = ["JPEG", "PNG", "JPG", "GIF"];

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
      <PictureModal
        open={openPicModal}
        onCloseModal={onClosePicModal}
        pic={picture}
      />
      {/* <ReviewProperty open={open} onCloseModal={handleCloseModal} /> */}
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
        <p style={{ marginLeft: "0px" }}>Choose Section</p>

        <select
          style={{ marginLeft: "0px" }}
          onChange={(e) => {
            setSection(e.target.value);
          }}
          className={classes.input_field}
          type={"text"}
        >

          <option disabled={true} value={"bedroom"}>Select area</option>
          {propertyMeta == null ? (
                  null
                ) : (
                  propertyMeta.map((opt, id) => {
                    return (
                      <option key={id} value={opt}>{opt}</option>
                    );
                  })
                )}
          {/* <option value={"bedroom"}>Bedroom</option>
          <option value={"dining"}>Dining</option>
          <option value={"bathroom"}>Bathroom</option> */}
        </select>
      </div>

      {propMetaJSON ? (
      <div className={classes.file_dropper_section}>
          <div className={classes.images_container}>
            {propMetaJSON[section]?.map((pic, index) => (
              <div key={index} style={{ position: "relative" }}>
                <div
                  onClick={() => {
                    handleDeletePicture(index);
                  }}
                  className={classes.del_icon}
                  numOfImages={numOfImages}
                >
                  <p>-</p>
                </div>

                <div 
                    className={classes.property_pictures}>
                  {/* 2. Use the `Image` component as you would any other component  */}
                  {/* <Image src={imageSrc} alt={imageAltText}/> */}
              
                  <Image 
                    src={URL.createObjectURL(pic)} 
                    onClick={() => {
                      onOpenPicModal();
                      setPicture(pic);
                    }}
                    key={index}

                    // layout='fill'
                    // objectFit='contain'

                    // layout='fill'
                    height={'90%'}
                    width={'90%'}
                    // alt={imageAltText}
                    />

                </div>

                {/* <img
                  className={classes.property_pictures}
                  onClick={() => {
                    onOpenPicModal();
                    setPicture(pic);
                  }}
                  key={index}
                  // src={URL.createObjectURL(pic)}
                  src={URL.createObjectURL(new Blob([pic]))}
                  
                /> */}
              </div>
            ))}
            {propMetaJSON[section]?.length !== 0 && (
              <div className={classes.more_images_adder}>
                <p style={{ marginBottom: "2px", fontSize: "18px" }}>+</p>
                <input
                  onChange={(e) => {
                    handleAddFile(e.target.files[0]);
                  }}
                  type="file"
                />
              </div>
            )}
          </div>

          {propMetaJSON[section]?.length === 0 && (
            <div className={classes.dropper_content}>
              <img
                src={image_placeholder.src}
                className={classes.placeholder}
              />
              <p className={classes.drag_img_text}>
                Choose or drag and drop images of your property
              </p>
              <p className={classes.choose_image_text}>Choose Image</p>
            </div>
          )}
          {propMetaJSON[section]?.length > 0 ? (
            <div className={classes.fake_image_dropper_area}></div>
          ) : (
            <FileUploader
              multiple={true}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
              onTypeError={() => {
                error("Format not supported");
              }}
            />
          )}
        </div>):(
          null
        )}

      {/* {section === "Bedroom # 1" ? (
        <div className={classes.file_dropper_section}>
          <div className={classes.images_container}>
            {filesArr?.map((pic, index) => (
              <div key={index} style={{ position: "relative" }}>
                <div
                  onClick={() => {
                    handleDeletePicture(index);
                  }}
                  className={classes.del_icon}
                >
                  <p>-</p>
                </div>

                <img
                  className={classes.property_pictures}
                  onClick={() => {
                    onOpenPicModal();
                    setPicture(pic);
                  }}
                  key={index}
                  src={URL.createObjectURL(pic)}
                />
              </div>
            ))}
            {filesArr?.length !== 0 && (
              <div className={classes.more_images_adder}>
                <p style={{ marginBottom: "2px", fontSize: "18px" }}>+</p>
                <input
                  onChange={(e) => {
                    handleAddFile(e.target.files[0]);
                  }}
                  type="file"
                />
              </div>
            )}
          </div>

          {filesArr?.length === 0 && (
            <div className={classes.dropper_content}>
              <img
                src={image_placeholder.src}
                className={classes.placeholder}
              />
              <p className={classes.drag_img_text}>
                Choose or drag and drop images of your property
              </p>
              <p className={classes.choose_image_text}>Choose Image</p>
            </div>
          )}
          {filesArr?.length > 0 ? (
            <div className={classes.fake_image_dropper_area}></div>
          ) : (
            <FileUploader
              multiple={true}
              handleChange={handleChangeFiles}
              name="file"
              types={fileTypes}
              onTypeError={() => {
                error("Format not supported");
              }}
            />
          )}
        </div>
      ) : section === "dining" ? (
        <div className={classes.file_dropper_section}>
          <div className={classes.images_container}>
            {filesArrDining?.map((pic, index) => (
              <div key={index} style={{ position: "relative" }}>
                <div
                  onClick={() => {
                    handleDeleteDiningPicture(index);
                  }}
                  className={classes.del_icon}
                >
                  <p>-</p>
                </div>

                <img
                  className={classes.property_pictures}
                  onClick={() => {
                    onOpenPicModal();
                    setPicture(pic);
                  }}
                  key={index}
                  src={URL.createObjectURL(pic)}
                />
              </div>
            ))}
            {filesArrDining?.length !== 0 && (
              <div className={classes.more_images_adder}>
                <p style={{ marginBottom: "2px", fontSize: "18px" }}>+</p>
                <input
                  onChange={(e) => {
                    handleDiningAddFile(e.target.files[0]);
                  }}
                  type="file"
                />
              </div>
            )}
          </div>

          {filesArrDining?.length === 0 && (
            <div className={classes.dropper_content}>
              <img
                src={image_placeholder.src}
                className={classes.placeholder}
              />
              <p className={classes.drag_img_text}>
                Choose or drag and drop images of your property
              </p>
              <p className={classes.choose_image_text}>Choose Image</p>
            </div>
          )}
          {filesArrDining?.length > 0 ? (
            <div className={classes.fake_image_dropper_area}></div>
          ) : (
            <FileUploader
              multiple={true}
              handleChange={handleDiningChange}
              name="file"
              types={fileTypes}
              onTypeError={() => {
                error("Format not supported");
              }}
            />
          )}
        </div>
      ) : section === "bathroom" ? (
        <div className={classes.file_dropper_section}>
          <div className={classes.images_container}>
            {filesArrBathroom?.map((pic, index) => (
              <div key={index} style={{ position: "relative" }}>
                <div
                  onClick={() => {
                    handleDeleteBathroomPicture(index);
                  }}
                  className={classes.del_icon}
                >
                  <p>-</p>
                </div>

                <img
                  className={classes.property_pictures}
                  onClick={() => {
                    onOpenPicModal();
                    setPicture(pic);
                  }}
                  key={index}
                  src={URL.createObjectURL(pic)}
                />
              </div>
            ))}
            {filesArrBathroom?.length !== 0 && (
              <div className={classes.more_images_adder}>
                <p style={{ marginBottom: "2px", fontSize: "18px" }}>+</p>
                <input
                  onChange={(e) => {
                    handleBathroomAddFile(e.target.files[0]);
                  }}
                  type="file"
                />
              </div>
            )}
          </div>

          {filesArrBathroom?.length === 0 && (
            <div className={classes.dropper_content}>
              <img
                src={image_placeholder.src}
                className={classes.placeholder}
              />
              <p className={classes.drag_img_text}>
                Choose or drag and drop images of your property
              </p>
              <p className={classes.choose_image_text}>Choose Image</p>
            </div>
          )}
          {filesArrBathroom?.length > 0 ? (
            <div className={classes.fake_image_dropper_area}></div>
          ) : (
            <FileUploader
              multiple={true}
              handleChange={handleBathroomChange}
              name="file"
              types={fileTypes}
              onTypeError={() => {
                error("Format not supported");
              }}
            />
          )}
        </div>
      ) : (
        <></>
      )} */}

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
