import React, { useState, useEffect } from "react";
import classes from "./properties.module.css";
import magnifying_glass from "../../public/assets/homescreen/magnifying_glass.png";
import dropdown from "../../public/assets/properties_screen_assets/dropdown.svg";
import filter_icon from "../../public/assets/properties_screen_assets/filter_icon.svg";
import location_pin from "../../public/assets/properties_screen_assets/location_pin.svg";
import PropertyCard from "../../components/propertyCard";
import map_search_icon from "../../public/assets/properties_screen_assets/map_search_icon.png";
import map_search_icon_white from "../../public/assets/properties_screen_assets/map_search_icon_white.png";
import Filter from "../../components/modal/filter";
import back_arrow from "../../public/assets/login_screen_assets/back_arrow.svg";
import heart from "../../public/assets/property_card_assets/heart_icon_card.png";
import { useRouter } from "next/router";

import GoogleMapReact from 'google-map-react';

import {DataStore} from '@aws-amplify/datastore';
import {Listing} from '../../models';

import * as queries from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

const AnyReactComponent = ({ text }) => <img
        src={location_pin.src}
        className={classes.location_pin}
        />;


function Properties() {
  const router = useRouter();
  const [mapView, setMapView] = useState(false);
  const [isMapSearch, setIsMapSearch] = useState(false);
  const [open, setOpen] = useState();

  const [listings, setListings] = useState([]);

  var defaultProps = {
    center: {
      lat: 33.6755223,
      lng: 72.9971537
    },
    zoom: 16
  };

  const handleOpenModal = async () => {
    setOpen(true);
  };

  // graphql/**/*.js

  const onCloseModal = async () => {
    setOpen(false);
  };

  const handleToggleMapSearch = async () => {
    setIsMapSearch(!isMapSearch);
  };

  const handleToggleMapView = async () => {
    setMapView(true);
  };

  const handleToggleNormalView = async () => {
    setMapView(false);
  };

  const fetch_listings = async () => {
    // console.log(user)
    // await API.graphql({
    //   query: mutations.createListing,
    //   variables: { input: propertyFeatures },
    // });



    // let filter = {
    //     _deleted: {
    //         eq: null // filter priority = 1
    //     }
    // };
    // Query using a parameter
    const fetched_listings = await API.graphql({
      query: queries.listListings
      // variables: { filter: filter }

      // variables: { Name: 'Shhs' }

      // House # 1029D, Street # 46
    });

    // const fetched_listings = await API.graphql(graphqlOperation(queries.listListings, {
    //     filter: {
    //         _deleted: {
    //             eq: "completed"
    //         }
    //     }
    // }));

    // fetched_listings.data.listListings.items

    var data_filter = fetched_listings.data.listListings.items.filter( element => element._deleted == null)

    setListings(data_filter)

    console.log('fetched_listings', data_filter);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {

      defaultProps.center.lat = position.coords.latitude;
      defaultProps.center.lng = position.coords.longitude;

      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });

    fetch_listings();    

    


    // const subscription = DataStore.observeQuery(Listing).subscribe(snapshot => {
    //   const {items, isSynced} = snapshot;
    //   // dispatch(fetch_data(items));

    //   setListings(items)
    //   console.log(items)
    // });

    // return () => {
    //   // Anything in here is fired on component unmount.
    //   subscription.unsubscribe();
    // };
  }, []);

  return (
    <>
      <Filter onCloseModal={onCloseModal} open={open} />

      {mapView ? (
        <div className={classes.container_map}>
          <img
            onClick={() => {
              router.push("/");
            }}
            src={back_arrow.src}
            className={classes.back_arrow}
          />
          <div
            onClick={handleToggleMapSearch}
            style={{ backgroundColor: isMapSearch && "#ff9000" }}
            className={classes.map_icon_container}
          >
            <img
              src={
                isMapSearch ? map_search_icon_white.src : map_search_icon.src
              }
              className={classes.map_search_icon}
            />
            <p style={{ color: isMapSearch && "white" }}>Manual Search</p>
          </div>

          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyAtLTTQK0DCmLqBqBeskqq2vnewAPaVKvo" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={defaultProps.center.lat}
              lng={defaultProps.center.lng}
              text="My Marker"
            />
          </GoogleMapReact>

          {/* <iframe
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe> */}


          <div className={classes.filter_section_map_view_container}>
            <div className={classes.filter_section_map_view}>
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
                  <div className={classes.max_price_menu}>
                    <div className={classes.single_menu_tab}>
                      <p>Rs 1,000,000</p>
                    </div>
                    <div className={classes.single_menu_tab}>
                      <p>Rs 2,000,000</p>
                    </div>
                    <div className={classes.single_menu_tab}>
                      <p>Rs 3,000,000</p>
                    </div>
                    <div className={classes.single_menu_tab}>
                      <p>Rs 4,000,000</p>
                    </div>
                    <div className={classes.single_menu_tab}>
                      <p>Rs 5,000,000</p>
                    </div>
                    <div className={classes.single_menu_tab}>
                      <p>Rs 6,000,000</p>
                    </div>
                    <div className={classes.single_menu_tab}>
                      <p>Rs 7,000,000</p>
                    </div>
                  </div>
                  <p>Max Price</p>
                  <img src={dropdown.src} className={classes.dropdown_img} />
                </div>
                <div className={classes.rooms}>
                  <div className={classes.max_price_menu}>
                    <div className={classes.single_menu_tab}>
                      <p>2</p>
                    </div>
                    <div className={classes.single_menu_tab}>
                      <p>3</p>
                    </div>
                    <div className={classes.single_menu_tab}>
                      <p>4</p>
                    </div>
                  </div>
                  <p>Rooms</p>
                  <img src={dropdown.src} className={classes.dropdown_img} />
                </div>
                <div onClick={handleOpenModal} className={classes.filters}>
                  <img src={filter_icon.src} className={classes.filters_img} />
                </div>
                <div
                  onClick={handleToggleNormalView}
                  className={classes.map_view}
                >
                  <img
                    src={location_pin.src}
                    className={classes.location_pin}
                  />
                  <p>Grid View</p>
                </div>
              </div>
            </div>
            <div className={classes.right_panel}></div>
          </div>

          <div className={classes.properties_container_map_view}>
            <PropertyCard />
            <PropertyCard /> <PropertyCard /> <PropertyCard /> <PropertyCard />
          </div>
        </div>
      ) : (
        <div className={classes.container}>
          <img
            onClick={() => {
              router.push("/");
            }}
            src={back_arrow.src}
            className={classes.back_arrow}
          />
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
                  <div className={classes.max_price_menu}>
                    <div className={classes.single_menu_tab}>
                      <p>Rs 1,000,000</p>
                    </div>
                    <div className={classes.single_menu_tab}>
                      <p>Rs 2,000,000</p>
                    </div>
                    <div className={classes.single_menu_tab}>
                      <p>Rs 3,000,000</p>
                    </div>
                    <div className={classes.single_menu_tab}>
                      <p>Rs 4,000,000</p>
                    </div>
                    <div className={classes.single_menu_tab}>
                      <p>Rs 5,000,000</p>
                    </div>
                    <div className={classes.single_menu_tab}>
                      <p>Rs 6,000,000</p>
                    </div>
                    <div className={classes.single_menu_tab}>
                      <p>Rs 7,000,000</p>
                    </div>
                  </div>
                  <p className={classes.max_price_description}>Max Price</p>
                  <img src={dropdown.src} className={classes.dropdown_img} />
                </div>
                <div className={classes.rooms}>
                  <div className={classes.max_price_menu}>
                    <div className={classes.single_menu_tab}>
                      <p>2</p>
                    </div>
                    <div className={classes.single_menu_tab}>
                      <p>3</p>
                    </div>
                    <div className={classes.single_menu_tab}>
                      <p>4</p>
                    </div>
                  </div>
                  <p>Rooms</p>
                  <img src={dropdown.src} className={classes.dropdown_img} />
                </div>
                <div onClick={handleOpenModal} className={classes.filters}>
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
            {listings == null ? (
                  null
                ) : (
                  listings.map(listing => {
                    return (
                      <PropertyCard 
                        key={listing.id}
                        id={listing.id}
                        adlife={listing.AdLife}
                        adlifetier={listing.AdLifeTier}
                        address={listing.Address}
                        price={listing.Price}
                        placeholderimage={listing.Images[0]}
                      />
                    );
                  })
                )}
              {/* <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Properties;
