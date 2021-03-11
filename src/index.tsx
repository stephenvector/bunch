import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import AuthProvider from "./AuthProvider";
import CommunitiesProvider from "./CommunitiesProvider";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <AuthProvider>
        <CommunitiesProvider>
          <App />
        </CommunitiesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
