import React from "react";
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as colors from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
console.log("darkBlack is " + fade(colors.darkBlack, 0.3));


//Overidding theme values

const muiTheme = getMuiTheme ({
  palette: {
    primary1Color: colors.red500,
    primary2Color: colors.red700,
    primary3Color: colors.red100,
    accent1Color: colors.lime500,
    accent2Color: colors.lime700,
    accent3Color: colors.lime100,
    textColor: colors.grey900,
    alternateTextColor: colors.white,
    canvasColor: colors.white,
    borderColor: "#B6B6B6",
    disabledColor: colors.grey100,
    pickerHeaderColor: colors.grey100,
    clockCircleColor: fade(colors.darkBlack, 0.07),
    shadowColor: colors.fullBlack,
  }
});

import Header from ".././Partials/Header";
import Footer from ".././Partials/Footer";

class Layout extends React.Component{
  getChildContext(){
    return {muiTheme: this.state.muiTheme};
  }
  constructor(){
    super();
    //Whenever this changes the DOM will re-render and change
    this.state = {muiTheme: getMuiTheme(lightBaseTheme)};
  }

  render () {
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header />
          { this.props.children }

          <Footer />
        </div>
        </MuiThemeProvider>
      );
   }
}

Layout.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default Layout;
