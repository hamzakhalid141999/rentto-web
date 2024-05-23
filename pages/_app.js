import "../styles/globals.css";
import MainLayout from "../components/layout/index";
import defaultLayout from "../components/layout/default";
import { AuthProvider } from "../contextApi";
import awsconfig from "../aws-exports";

import React, { useState, useEffect } from "react";
import { useAuth } from "../contextApi";

// Storage.configure({ level: 'protected' })

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || defaultLayout;


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
