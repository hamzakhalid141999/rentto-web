import "../styles/globals.css";
import MainLayout from "../components/layout/index";
import defaultLayout from "../components/layout/default";

// import { Amplify, Auth } from 'aws-amplify';
// import { withAuthenticator } from '@aws-amplify/ui-react';

// import awsconfig from '../aws-exports';

// Amplify.configure(awsconfig);

function MyApp({ Component, pageProps, signOut, user }) {
  const Layout = Component.Layout || defaultLayout;

  return (
    <MainLayout>
      {/* <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainLayout>
  );
}

export default MyApp;

// export default withAuthenticator(MyApp);
