import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  user: null,
  signUp: () => {},
  removeUser: () => {},
  signedIn: null,
  setSignedIn: () => {},
});
function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setUser(JSON.parse(window.localStorage.getItem("user")));
    }
  }, []);

  const signUp = (userInformation) => {
    localStorage.setItem("user", JSON.stringify(userInformation));
    setUser(userInformation);
  };

  const removeUser = (value) => {
    setUser(null);
    localStorage.clear();
  };

  const value = {
    user,
    signUp,
    removeUser,
    signedIn,
    setSignedIn,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}

export { useAuth, AuthProvider };
