import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Signup />
      </div>
    </AuthProvider>
  );
}

export default App;
