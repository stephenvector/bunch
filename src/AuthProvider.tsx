import React, { useCallback, useEffect, useMemo, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import AuthContext from "./AuthContext";

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged((user: firebase.User | null) => {
        console.log(user);
        setCurrentUser(user);
      });

    return () => {
      unsubscribe();
    };
  }, []);

  const signedIn = useMemo(() => currentUser !== null, [currentUser]);

  const signOut = useCallback(() => {
    firebase.auth().signOut();
  }, []);

  const signUp = useCallback(async (email: string, password: string) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signedIn,
        signOut,
        signIn,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
