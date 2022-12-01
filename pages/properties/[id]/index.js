import React from "react";
import PropertyBanner from "../../../components/ScreenComponents/propertyScreen/PropertyBanner";
import PropertyInfo from "../../../components/ScreenComponents/propertyScreen/PropertyInfo";
import classes from "./property.module.css";
import { useEffect, useState } from "react";

import { useRouter } from 'next/router'

// import { useAuth } from "../contextApi";
import { getListing } from "../../../graphql/queries";

import { API, graphqlOperation, Storage } from "aws-amplify";
// import { createUser, deleteUser } from "../graphql/mutations";


function Property(props) {

  const router = useRouter()
  console.log('App', router.query);


  const [listing, setListing] = useState(null);
  const [images, setImages] = useState(null);

  const getListingDetails = async () => {
    // query the database using Auth user id (sub)
    const listingData = await API.graphql(
      graphqlOperation(getListing, { id: router.query.id })
    );

    // console.log('DATA', listingData.data.getListing);

    setListing(listingData.data.getListing);

    var tmp = [];
    for (let i = 0; i < listingData.data.getListing.Images.length; i++) {

      // var signedUrl = await Storage.get(listingData.data.getListing.Images[i], { level: "protected" });
      // tmp.push(signedUrl);

      tmp.push(listingData.data.getListing.Images[i]);
    }

    setImages(tmp)

  }

  
  useEffect(() => {
    // const { data } = getQueryParams(window.location.search);
    // console.log('data', data);

    console.log();

    getListingDetails();
    
  }, []);

  return (
    <div className={classes.property_section}>
      <PropertyBanner
        listing = {listing}
        images={images}
      />
      <PropertyInfo />
    </div>
  );
}




export default Property;
