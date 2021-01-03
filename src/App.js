import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/homepage/homepage.component";

const PageTwo = () => <div>PageTwo</div>;

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/pagetwo" component={PageTwo} />
    </div>
  );
}

export default App;
