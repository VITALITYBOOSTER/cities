import React from "react";
import { Route } from "react-router-dom";
import CityCreator from "./components/LangusgeCreator";
import CityDisplayer from "./components/CityDisplaying/LanguageDisplayer";
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
