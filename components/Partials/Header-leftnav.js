import React, { Component } from 'react'
import { LeftNav, AppBar} from 'material-ui'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Route, Router } from 'react-router'



export default class Header extends Component  {


  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }


  _toggle(e){
    e.preventDefault()
    this.refs.leftNav.toggle()
  }

        render() {
          /*const data = this.props.data
          const nav_items = data.globals.nav_items

          const menu_items = nav_items.map(( nav_item ) => {
            return (
              <span key={ 'key-' + nav_item.value }>
                <Link to={ '/' + nav_item.value }>{ nav_item.title }</Link>
              </span>
            )
          })*/
          menuItems: [
            {route: '/about', text: 'about'},
            {route: '/work', text: 'work'},
            {route: '/contact', text: 'contact'}
          ]

            return (
                <div>
                <LeftNav ref='leftNav'
                docked={false}
                menuItems={ this.menuItems }  />

                <AppBar   title="App Bar Example"
            isInitiallyOpen={true} onLeftIconButtonTouchTap={this._toggle} />
                </div>
            )
        }
    }

    Header.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default Header;
