import React from "react";
import { Route } from "react-router-dom";
import CityCreator from "./components/LangusgeCreator";
import CityDisplayer from "./components/CityDisplaying/LanguageDisplayer";
import Header from "./pages/Header";
import Search from "./components/Search/Search";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="container pt-4">
      <Header></Header>
      <Route path="/" exact>
        <HomePage></HomePage>
      </Route>
      <Route path="/search" exact>
        <Search></Search>
        <CityDisplayer />
      </Route>
      <Route path="/creating" exact>
        <CityCreator />
      </Route>
    </div>
  );
}

export default App;
