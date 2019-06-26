import React, { Component } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

// also see Home.js for Comsumer
class Home extends Component {
  static contextType = ThemeContext;
  render() {
    // console.log(this.context);
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div className='home'>
        <h2 style={{ background: theme.bg, color: theme.color }}>Some text</h2>
      </div>
    );
  }
}

export default Home;
