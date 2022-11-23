import React, { useState, useEffect } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import classes from "./filter.module.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

function Filter({ setOpen, open, onCloseModal }) {
  const [propertySize, setPropertySize] = useState();
  const [isFurnished, setIsFurnished] = useState();
  const [beds, setBeds] = useState();
  const [bathroom, setBathroom] = useState();
  const [lounge, setLounge] = useState();
  const [diningRoom, setDiningRoom] = useState();

  const [selectedPropertyType, setSelectedPropertyType] = useState();

  function valuetext(value) {
    return `${value}°C`;
  }

  const handleResetFilters = async () => {
    setPropertySize();
    setIsFurnished();
    setBeds();
    setBathroom();
    setLounge();
    setDiningRoom();
    setSelectedPropertyType();
  };

  useEffect(() => {
    if (open) {
      setPropertySize();
      setIsFurnished();
      setBeds();
      setBathroom();
      setLounge();
      setDiningRoom();
      setSelectedPropertyType();
    }
  }, [open]);

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.mode === "dark" ? "red" : "orange",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  const [value, setValue] = React.useState([50000, 300000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTogglePropertyType = async (val) => {
    setSelectedPropertyType(val);
  };

  const label = { inputProps: { "aria-label": "Color switch demo" } };

  return (
    <Modal
      classNames={{
        overlay: classes.customOverlay,
        modal: classes.filterModal,
      }}
      open={open}
      onClose={onCloseModal}
      center
    >
      <div className={classes.main_container}>
        <p className={classes.heading}>Filters</p>
        <div className={classes.content_container}>
          <div className={classes.row_with_label}>
            <p>Property Type</p>
            <div className={classes.single_row}>
              <div
                onClick={() => handleTogglePropertyType("residential")}
                className={
                  selectedPropertyType === "residential"
                    ? classes.btn_filled
                    : classes.btn_empty
                }
              >
                <p>RESIDENTIAL</p>
              </div>
              <div
                onClick={() => handleTogglePropertyType("commercial")}
                className={
                  selectedPropertyType === "commercial"
                    ? classes.btn_filled
                    : classes.btn_empty
                }
              >
                <p>COMMERCIAL</p>
              </div>
            </div>
          </div>

          <div className={classes.row_with_label}>
            <p>Rent Range</p>

            <Box sx={{ width: 300 }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={10000}
                max={700000}
              />
            </Box>
            <div className={classes.price_labels}>
              <p>Rs. 10,000</p>
              <p>Rs. 700,000</p>
            </div>
          </div>

          <div
            style={{
              // justifyContent: "flex-start",
              columnGap: "15px",
              flexWrap: "wrap",
              // marginTop: "30px",
            }}
            className={classes.single_row}
          >
            <p>Property Size</p>
            <select
              onChange={(e) => {
                setPropertySize(e.target.value);
              }}
              className={classes.property_size_input}
            >
              <option value={"2000"}>2000 Sq</option>
              <option value={"3000"}>30000 Sq</option>
              <option value={"4000"}>4000 Sq</option>
              <option value={"5000"}>5000 Sq</option>
              <option value={"6000"}>6000 Sq</option>
            </select>
          </div>

          <div
            style={{
              // justifyContent: "flex-start",
              columnGap: "15px",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
            className={classes.single_row}
          >
            <div
              onClick={() => {
                setPropertySize("2000-3000");
              }}
              className={
                propertySize === "2000-3000"
                  ? classes.tab_selected
                  : classes.tab
              }
            >
              <p>2000-3000</p>
            </div>

            <div
              onClick={() => {
                setPropertySize("3000-4000");
              }}
              className={
                propertySize === "3000-4000"
                  ? classes.tab_selected
                  : classes.tab
              }
            >
              <p>3000-4000</p>
            </div>
            <div
              onClick={() => {
                setPropertySize("4000-5000");
              }}
              className={
                propertySize === "4000-5000"
                  ? classes.tab_selected
                  : classes.tab
              }
            >
              <p>4000-5000</p>
            </div>
            <div
              onClick={() => {
                setPropertySize("5000-6000");
              }}
              className={
                propertySize === "5000-6000"
                  ? classes.tab_selected
                  : classes.tab
              }
            >
              <p>5000-6000</p>
            </div>
            <div className={classes.tab}>
              <p style={{ fontSize: "26px" }}>+</p>
            </div>
          </div>

          <div style={{ marginTop: "30px" }} className={classes.row_with_label}>
            <p>Furnishing</p>

            <div
              style={{
                justifyContent: "flex-start",
                columnGap: "15px",
                // marginTop: "30px",
              }}
              className={classes.single_row}
            >
              <div
                onClick={() => {
                  setIsFurnished(true);
                }}
                className={
                  isFurnished === true ? classes.tab_selected : classes.tab
                }
              >
                <p>FURNISHED</p>
              </div>

              <div
                onClick={() => {
                  setIsFurnished(false);
                }}
                className={
                  isFurnished === false ? classes.tab_selected : classes.tab
                }
              >
                <p>NON-FURNISHED</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "30px" }} className={classes.row_with_label}>
            <p>Beds</p>

            <div
              style={{
                // justifyContent: "flex-start",
                columnGap: "15px",
                flexWrap: "wrap",
                // marginTop: "30px",
              }}
              className={classes.single_row}
            >
              <div
                onClick={() => {
                  setBeds("1");
                }}
                className={beds === "1" ? classes.tab_selected : classes.tab}
              >
                <p>1</p>
              </div>
              <div
                onClick={() => {
                  setBeds("2");
                }}
                className={beds === "2" ? classes.tab_selected : classes.tab}
              >
                <p>2</p>
              </div>
              <div
                onClick={() => {
                  setBeds("3");
                }}
                className={beds === "3" ? classes.tab_selected : classes.tab}
              >
                <p>3</p>
              </div>
              <div
                onClick={() => {
                  setBeds("4");
                }}
                className={beds === "4" ? classes.tab_selected : classes.tab}
              >
                <p>4</p>
              </div>
              <div
                onClick={() => {
                  setBeds("5");
                }}
                className={beds === "5" ? classes.tab_selected : classes.tab}
              >
                <p>5</p>
              </div>
              <div
                onClick={() => {
                  setBeds("6+");
                }}
                className={beds === "6+" ? classes.tab_selected : classes.tab}
              >
                <p>6+</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "0px" }} className={classes.row_with_label}>
            <p>Bathroom</p>

            <div
              style={{
                // justifyContent: "flex-start",
                columnGap: "15px",
                flexWrap: "wrap",
                // marginTop: "30px",
              }}
              className={classes.single_row}
            >
              <div
                onClick={() => {
                  setBathroom("1");
                }}
                className={
                  bathroom === "1" ? classes.tab_selected : classes.tab
                }
              >
                <p>1</p>
              </div>
              <div
                onClick={() => {
                  setBathroom("2");
                }}
                className={
                  bathroom === "2" ? classes.tab_selected : classes.tab
                }
              >
                <p>2</p>
              </div>
              <div
                onClick={() => {
                  setBathroom("3");
                }}
                className={
                  bathroom === "3" ? classes.tab_selected : classes.tab
                }
              >
                <p>3</p>
              </div>
              <div
                onClick={() => {
                  setBathroom("4");
                }}
                className={
                  bathroom === "4" ? classes.tab_selected : classes.tab
                }
              >
                <p>4</p>
              </div>
              <div
                onClick={() => {
                  setBathroom("5");
                }}
                className={
                  bathroom === "5" ? classes.tab_selected : classes.tab
                }
              >
                <p>5</p>
              </div>
              <div
                onClick={() => {
                  setBathroom("6+");
                }}
                className={
                  bathroom === "6+" ? classes.tab_selected : classes.tab
                }
              >
                <p>6+</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "0px" }} className={classes.row_with_label}>
            <p>Lounge</p>

            <div
              style={{
                // justifyContent: "flex-start",
                columnGap: "15px",
                flexWrap: "wrap",
                // marginTop: "30px",
              }}
              className={classes.single_row}
            >
              <div
                onClick={() => {
                  setLounge("1");
                }}
                className={lounge === "1" ? classes.tab_selected : classes.tab}
              >
                <p>1</p>
              </div>
              <div
                onClick={() => {
                  setLounge("2");
                }}
                className={lounge === "2" ? classes.tab_selected : classes.tab}
              >
                <p>2</p>
              </div>
              <div
                onClick={() => {
                  setLounge("3");
                }}
                className={lounge === "3" ? classes.tab_selected : classes.tab}
              >
                <p>3</p>
              </div>
              <div
                onClick={() => {
                  setLounge("4");
                }}
                className={lounge === "4" ? classes.tab_selected : classes.tab}
              >
                <p>4</p>
              </div>
              <div
                onClick={() => {
                  setLounge("5");
                }}
                className={lounge === "5" ? classes.tab_selected : classes.tab}
              >
                <p>5</p>
              </div>
              <div
                onClick={() => {
                  setLounge("6+");
                }}
                className={lounge === "6+" ? classes.tab_selected : classes.tab}
              >
                <p>6+</p>
              </div>
            </div>
          </div>

          <div
            style={{
              justifyContent: "space-between",
              columnGap: "15px",
              marginTop: "30px",
            }}
            className={classes.single_row}
          >
            <p>New Construction</p>

            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            />
          </div>

          <div
            style={{
              justifyContent: "space-between",
              columnGap: "15px",
              marginTop: "30px",
            }}
            className={classes.single_row}
          >
            <p>Fore Sale by Owner</p>

            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            />
          </div>

          <div
            style={{
              justifyContent: "space-between",
              columnGap: "15px",
              marginTop: "30px",
            }}
            className={classes.single_row}
          >
            <p>For Sale by Agent</p>

            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
            />
          </div>

          <div style={{ marginTop: "50px" }} className={classes.row_with_label}>
            <p>Seperate Dining Room</p>

            <div
              style={{
                // justifyContent: "flex-start",
                columnGap: "15px",
                flexWrap: "wrap",
                // marginTop: "30px",
              }}
              className={classes.single_row}
            >
              <div
                onClick={() => {
                  setDiningRoom("1");
                }}
                className={
                  diningRoom === "1" ? classes.tab_selected : classes.tab
                }
              >
                <p>1</p>
              </div>
              <div
                onClick={() => {
                  setDiningRoom("2");
                }}
                className={
                  diningRoom === "2" ? classes.tab_selected : classes.tab
                }
              >
                <p>2</p>
              </div>
              <div
                onClick={() => {
                  setDiningRoom("3");
                }}
                className={
                  diningRoom === "3" ? classes.tab_selected : classes.tab
                }
              >
                <p>3</p>
              </div>
              <div
                onClick={() => {
                  setDiningRoom("4");
                }}
                className={
                  diningRoom === "4" ? classes.tab_selected : classes.tab
                }
              >
                <p>4</p>
              </div>
              <div
                onClick={() => {
                  setDiningRoom("5+");
                }}
                className={
                  diningRoom === "5+" ? classes.tab_selected : classes.tab
                }
              >
                <p>5+</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.bottom_banner}>
          <p className={classes.reset_filter} onClick={handleResetFilters}>
            Reset All
          </p>

          <div className={classes.btn_filled}>
            <p>Set Filter</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Filter;
