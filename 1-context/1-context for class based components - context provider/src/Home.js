import React, { Component } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

// See HomeTwo.js to see how to access context in different way
// here we will update the context
class Home extends Component {
  static contextType = ThemeContext;
  render() {
    // console.log(this.context);
    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <div className='home'>
              <h2 style={{ background: theme.bg, color: theme.color }}>
                Some text
              </h2>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Home;
