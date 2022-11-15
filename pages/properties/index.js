import React, { useState, useEffect } from "react";
import classes from "./properties.module.css";
import magnifying_glass from "../../public/assets/homescreen/magnifying_glass.png";
import dropdown from "../../public/assets/properties_screen_assets/dropdown.svg";
import filter_icon from "../../public/assets/properties_screen_assets/filter_icon.svg";
import location_pin from "../../public/assets/properties_screen_assets/location_pin.svg";
import PropertyCard from "../../components/propertyCard";

function Properties() {
  const [mapView, setMapView] = useState(false);

  const handleToggleMapView = async () => {
    setMapView(true);
  };

  const handleToggleNormalView = async () => {
    setMapView(false);
  };

  return (
    <>
      {mapView ? (
        <div className={classes.container_map}>
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <div className={classes.filter_section_map_view}>
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
              <div
                onClick={handleToggleNormalView}
                className={classes.map_view}
              >
                <img src={location_pin.src} className={classes.location_pin} />
                <p>Grid View</p>
              </div>
            </div>
          </div>
          <div className={classes.properties_container_map_view}>
            <PropertyCard />
            <PropertyCard /> <PropertyCard /> <PropertyCard /> <PropertyCard />
          </div>
        </div>
      ) : (
        <div className={classes.container}>
          <div className={classes.content_container}>
            <div className={classes.filter_section}>
              <div className={classes.search_bar}>
                <img
                  src={magnifying_glass.src}
                  className={classes.search_icon}
                />
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
                <div onClick={handleToggleMapView} className={classes.map_view}>
                  <img
                    src={location_pin.src}
                    className={classes.location_pin}
                  />
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
      )}
    </>
  );
}

export default Properties;
