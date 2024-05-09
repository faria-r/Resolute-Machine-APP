import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";

const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState(true);

  //observe the currently signedin user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.email) {
        setUser(currentUser);
        setLoading(false);
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  //create a user with email  password

  const authInfo = {};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
