import React from 'react'
import { Drawer, AppBar, MenuItem, RaisedButton} from 'material-ui'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Route, Router } from 'react-router'
import { Link } from 'react-router';




export default class Header extends React.Component{

  constructor(props){
    super(props);
    this.state = {open:false};
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  //Toggle Functions
  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

        render() {


            return (
                <div>
                  <Drawer
                    docked={false}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>
                    <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item 1</MenuItem>
                    <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item 2</MenuItem>
                  </Drawer>

                  <AppBar
                    title="I Like Devils Blog"
                    isInitiallyOpen={true}
                    onLeftIconButtonTouchTap={ this.handleToggle.bind(this) }
                  />
              </div>
            )
        }
    }

    Header.childContextTypes = { muiTheme: React.PropTypes.object.isRequired };

export default Header;
