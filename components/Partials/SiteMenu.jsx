import React from 'react'
import {  elastic as Menu } from 'react-burger-menu';
//var Menu = require('react-burger-menu').elastic;
import { Route, Router } from 'react-router'
import { Link } from 'react-router';
import Radium from 'radium';


let RadiumLink = Radium(Link);

export default class SiteMenu extends React.Component{

  constructor(props){
    super(props);
    this.state = {open:false};
  }



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
                  <RadiumLink key={ 'key-' + nav_item.value}  className="menu-item" to={ '/' + nav_item.value }>{ nav_item.title }</RadiumLink>
                )
              })

            return (
                  <Menu pageWrapId={ "main-content" } isOpen={ false }>
                    { menu_items }
                  </Menu>
            )
        }
    }


export default SiteMenu;
