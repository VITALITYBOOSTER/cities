import React from "react";
import { Route } from "react-router-dom";
import CityCreator from "./components/CityCreator";
import CityDisplayer from "./components/CityDisplaying/CityDisplayer";
import Header from "./pages/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Route path="/creating" exact>
        <CityCreator />
      </Route>
      <Route path="/" exact>
        <CityDisplayer />
      </Route>
    </div>
  );
}

export default App;
