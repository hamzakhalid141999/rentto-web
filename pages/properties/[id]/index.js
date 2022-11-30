import React from "react";
import PropertyBanner from "../../../components/ScreenComponents/propertyScreen/PropertyBanner";
import PropertyInfo from "../../../components/ScreenComponents/propertyScreen/PropertyInfo";
import classes from "./property.module.css";
import { useEffect, useState } from "react";

import { useRouter } from 'next/router'

// import { useAuth } from "../contextApi";
import { getListing } from "../../../graphql/queries";

import { API, graphqlOperation } from "aws-amplify";
// import { createUser, deleteUser } from "../graphql/mutations";


function Property(props) {

  // const router = useRouter()
  // console.log('App', router.query);


  // const [listing, setListing] = useState(null);

  const getListingDetails = async () => {
    // query the database using Auth user id (sub)
    // const listingData = await API.graphql(
    //   graphqlOperation(getListing, { id: router.query.id })
    // );

    // console.log('DATA', listingData.data.getListing);

    // setListing(listingData);
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
        // listing = {listing}
      />
      <PropertyInfo />
    </div>
  );
}




export default Property;
