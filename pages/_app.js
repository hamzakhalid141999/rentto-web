import "../styles/globals.css";
import MainLayout from "../components/layout/index";
import defaultLayout from "../components/layout/default";

import { AuthProvider } from "../contextApi";

import { Amplify, Auth, Storage, API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "../aws-exports";

import React, { useState, useEffect } from "react";
import { useAuth } from "../contextApi";
import { getUser, listUsers } from "../graphql/queries";
import { createUser, deleteUser } from "../graphql/mutations";


Amplify.configure(awsconfig);
// Storage.configure({ level: 'protected' })

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || defaultLayout;
  
  const { user } = useAuth();

  const syncUser = async () => {
    // get Auth user
    const authUser = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    });

    console.log('OOser', authUser)

    // query the database using Auth user id (sub)
    const userData = await API.graphql(
      graphqlOperation(getUser, { id: authUser.attributes.sub })
    );

    // query the database using Auth user id (sub)
    const listData = await API.graphql(
      graphqlOperation(listUsers)
    );

    console.log('UD', userData.data.getUser);

    if (userData.data.getUser && !userData.data.getUser._deleted) {
      console.log("User already exists in DB");
      return;
    }
    // if there is no users in db, create one
    const newUser = {
      id: authUser.attributes.sub,
      name: authUser.attributes.email,
      status: "Hey, I am using WhatsApp",
    };

    // import { API } from "aws-amplify";
    // import * as mutations from './graphql/mutations';

    // const todoDetails = {
    //   id: authUser.attributes.sub,
    // };

    // const deletedTodo = await API.graphql({ query: deleteUser, variables: {input: todoDetails}});

    await API.graphql(
      graphqlOperation(createUser, { input: newUser })
    );
  };


  useEffect(() => {
    // important
    // syncUser();
  }, []);


  return (
    <AuthProvider>
      <MainLayout>
        {/* <>
          <h1>Hello {'user.username'}</h1>
          <button onClick={signOut}>Sign out</button>
        </> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainLayout>
    </AuthProvider>
  );
}

export default MyApp;

// export default withAuthenticator(MyApp);
