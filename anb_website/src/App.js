import React from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AnimalsPage from "./components/AnimalsPage";
import ItemPage from "./components/ItemPage";
import Footer from "./components/Footer";
import { Route } from "react-router";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={AnimalsPage} />
      <Route exact path="/shop/:id" component={ItemPage} />
      <Footer />
    </div>
  );
}

export default App;
