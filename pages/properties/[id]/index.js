import React from "react";
import PropertyBanner from "../../../components/ScreenComponents/propertyScreen/PropertyBanner";
import PropertyInfo from "../../../components/ScreenComponents/propertyScreen/PropertyInfo";
import classes from "./property.module.css";
import { useEffect, useState } from "react";


// import img1 from "../../../p";

import img1 from "../../../public/assets/property_page/img1.jpeg";
import img2 from "../../../public/assets/property_page/img2.jpg";
import img3 from "../../../public/assets/property_page/img3.jpeg";
import img4 from "../../../public/assets/property_page/img4.jpeg";

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

  const [propertyDetails, setPropertyDetails] = useState(null);
  const [propertySpecification, setPropertySpecification] = useState(null);

  const getListingDetails = async () => {
    console.log('getListingDetails', router.query);
    console.log('App2', router.query);

    // query the database using Auth user id (sub)
    const listingData = await API.graphql(
      graphqlOperation(getListing, { id: router.query.id })
    );

    console.log('DATA', listingData.data.getListing);
    setListing(listingData.data.getListing);

    setPropertyDetails(JSON.parse(listingData.data.getListing.PropertyDetails));
    setPropertySpecification(JSON.parse(listingData.data.getListing.PropertySpecification));

    // console.log(JSON.parse(listingData.data.getListing.PropertyDetails))
    // console.log(JSON.parse(listingData.data.getListing.PropertySpecification))



    var tmp = [];
    for (let i = 0; i < listingData.data.getListing.Images.length; i++) {

      // var signedUrl = await Storage.get(listingData.data.getListing.Images[i], { level: "protected" });
      // tmp.push(signedUrl);

      tmp.push(listingData.data.getListing.Images[i]);
    }


    if (tmp.length === 0){
      setImages([img1, img2, img3, img4, img1, img1]);
    } else {
      setImages(tmp);
    }


    return listingData.data.getListing;
  }

  
  useEffect( () => {
    // const { data } = getQueryParams(window.location.search);
    console.log('data', listing);

    // const lTemp = getListingDetails();
    // setListing(lTemp);

    if(!listing){
      // const { media } = router.query;
      // console.log(router.query)


      console.log('Getting listing details');
      getListingDetails();
      // console.log(temp)
      // if (!mediaId) return null;
      // getPostImage();
      // ...
    }


  }, [listing, router.query]);

  return (
    <div className={classes.property_section}>
      <PropertyBanner
        listing = {listing}
        images={images}
      />
      <PropertyInfo 
        listing = {listing}
        images={images}
        // description={listing?.PropertyDescription}
      />
    </div>
  );
}




export default Property;
