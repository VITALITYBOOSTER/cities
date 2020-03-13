import React from "react";
import { Route } from "react-router-dom";
import CityCreator from "./components/CityCreator";
import CityDisplayer from "./components/CityDisplaying/CityDisplayer";
import Header from "./pages/Header";
import CityUpdater from "./components/CityUpdater/CityUpdater";
import SearchComponent from "./components/SearchComponent/SearchComponent";

function App() {
  return (
    <div>
      <Header></Header>
      <Route path="/creating" exact>
        <CityCreator />
      </Route>
      <Route path="/" exact>
        <SearchComponent></SearchComponent>
        <CityDisplayer />
      </Route>
      <Route path="/update-city" exact>
        <CityUpdater />
      </Route>
    </div>
  );
}

export default App;
