import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  // Auth Loading:
  const [authLoading, setAuthLoading] = useState(true);

  const [user, setUser] = useState(null);


  // Sign up new users:
  const createNewUser = (email, password) => {
    setAuthLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Observe:
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Log Out:
  const logOut = () => {
    setAuthLoading(true)
    return signOut(auth);
  };

  // Log in:
  const LogIn = (email, password) => {
    setAuthLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Forget Password:
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    LogIn,
    forgetPassword,
    authLoading,
    setAuthLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
