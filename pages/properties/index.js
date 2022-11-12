import React from "react";
import classes from "./properties.module.css";
import magnifying_glass from "../../public/assets/homescreen/magnifying_glass.png";
import dropdown from "../../public/assets/properties_screen_assets/dropdown.svg";
import filter_icon from "../../public/assets/properties_screen_assets/filter_icon.svg";
import location_pin from "../../public/assets/properties_screen_assets/location_pin.svg";
import PropertyCard from "../../components/propertyCard";

function Properties() {
  return (
    <div className={classes.container}>
      <div className={classes.content_container}>
        <div className={classes.filter_section}>
          <div className={classes.search_bar}>
            <img src={magnifying_glass.src} className={classes.search_icon} />
            <input
              className={classes.input_field}
              placeholder="Search Location"
            />
          </div>
          <div className={classes.filter_btns_container}>
            <div className={classes.max_price}>
              <p>Max Price</p>
              <img src={dropdown.src} className={classes.dropdown_img} />
            </div>
            <div className={classes.rooms}>
              <p>Rooms</p>
              <img src={dropdown.src} className={classes.dropdown_img} />
            </div>
            <div className={classes.filters}>
              <img src={filter_icon.src} className={classes.filters_img} />
            </div>
            <div className={classes.map_view}>
              <img src={location_pin.src} className={classes.location_pin} />
              <p>Map View</p>
            </div>
          </div>
        </div>
        <div className={classes.properties_section}>
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
    </div>
  );
}

export default Properties;
