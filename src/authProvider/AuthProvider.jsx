import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { auth } from "../utilities/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  const googleLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateNameAndPhoto = (
    name = "User 4194",
    photo = "https://i.ibb.co/5x441PC/user.png"
  ) => {
    setIsLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const requestLogin = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const requestLogout = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  const info = {
    user,
    isLoading,
    createUser,
    googleLogin,
    updateNameAndPhoto,
    requestLogout,
    requestLogin,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    () => unSubscribe();
  }, []);

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
