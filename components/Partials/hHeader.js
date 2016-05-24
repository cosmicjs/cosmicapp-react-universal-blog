import React, { Component } from 'react'
import { Drawer, AppBar, MenuItem, RaisedButton} from 'material-ui'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Route, Router } from 'react-router'
import { Link } from 'react-router';



export default class Header extends Component  {

  constructor(props){
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this.state = {open:false};
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  _handleClick()
  {
    alert("DO SOMETHING!!!");
  }


  handleToggle() {
    this.setState({open: !this.state.open});
    alert("handleToggle clicked");
   }

  handleClose() { this.setState({open: false}); }

        render() {


            return (
                <div>
                <Drawer
                  docked={false}
                  open={this.state.open}
                  openSecondary={true}>
                  <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item 1</MenuItem>
                  <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item 2</MenuItem>
                </Drawer>
                <RaisedButton
                  label="Open Drawer"
                  onClick={this._handleClick}
                />

                <AppBar   title="App Bar Example"
            isInitiallyOpen={true}
            onLeftIconButtonTouchTap={ this.handleToggle.bind(this) } />
                </div>
            );
        }
    }

    Header.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default Header;
