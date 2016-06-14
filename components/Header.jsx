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
          const data = this.props.data
          const nav_items = data.globals.nav_items

          // Prevent initial null
          if(!nav_items){
            return <div></div>
          }

          //Build the menu items
          const menu_items = nav_items.map(( nav_item ) => {
            return (
                  <MenuItem key={ 'key-' + nav_item.value }><Link onTouchTap={this.handleClose.bind(this)}  onClick={ this.handleClick } to={ '/' + nav_item.value }>{ nav_item.title }</Link></MenuItem>
            )
          })

            return (
                <div>
                  <Drawer
                    docked={false}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>
                        { menu_items }
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
