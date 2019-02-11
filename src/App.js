import React, { Component, Fragment } from "react";
import "./App.css";

import MainGrid from "./components/MainGrid";
import { CssBaseline } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <MainGrid />
      </Fragment>
    );
  }

  //FCC check
  componentDidMount() {
    const script = document.createElement("script");

    script.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);
  }
}

export default App;
