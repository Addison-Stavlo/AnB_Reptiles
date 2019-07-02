import React from "react";
import logo from "./images/logos/logo_small_white.png";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
