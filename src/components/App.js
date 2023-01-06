import React, { useState } from "react";
import AppRouter from "router";
import firebase from "firebase.config";
import { authService } from "../firebase.config";

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(authService.currentUser);
  return (
    <>
      <AppRouter
        isLoggedIn={isLoggedIn}
      />
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
