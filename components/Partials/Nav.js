// Nav.js
import React, { Component } from 'react'
import { Drawer, MenuItem } from 'material-ui'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

import { Link } from 'react-router'

export default class Nav extends Component {

  constructor(props){
    super(props);
    this.state = {open:false};
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  //Close Drawer when clicking on the Link
    handleClose = () => this.setState({open: false});

  render(){

    //Collect the data and put it inside nav_items
    const data = this.props.data
    const nav_items = data.globals.nav_items

    // Prevent initial null
    if(!nav_items){
      return <div></div>
    }

    //Build the menu items
    const menu_items = nav_items.map(( nav_item ) => {
      return (
        <MenuItem key={ 'key-' + nav_item.value } onTouchTap={this.handleClose.bind(this)}>
          <Link onClick={ this.handleClick } to={ '/' + nav_item.value }>{ nav_item.title }</Link>
        </MenuItem>
      )
    })

    return (
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          { menu_items }
        </Drawer>
    )
  }
}

export default Nav;
