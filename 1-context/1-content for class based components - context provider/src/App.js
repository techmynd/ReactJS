import React, { Component } from "react";
import Home from "./HomeTwo";
// or
//import Home from "./Home";
import ThemeContextProvider from "./contexts/ThemeContext";
import ToggleTheme from "./ToggleTheme";

import "./App.css";

class App extends Component {
  render() {
    return (
      <ThemeContextProvider>
        <div className='App'>
          <Home />
          <ToggleTheme />
        </div>
      </ThemeContextProvider>
    );
  }
}

export default App;
