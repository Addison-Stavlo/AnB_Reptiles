import React from "react";
import logo from "./images/logos/logo_small_white.png";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AnimalsPage from "./components/AnimalsPage";
import Footer from "./components/Footer";
import { Route } from "react-router";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/animals" component={AnimalsPage} />
      <Footer />
    </div>
  );
}

export default App;
