// Loading.js
import React, { Component } from 'react'

export default class Header extends Component {


  render(){
    /*const data = this.props.data
    if(data.globals.header){
    console.log (logo_image_url)
    logo_image =_.findWhere(metafields, { key: 'logo-image' })
    var logo_image_url = data.globals.header.logo_image.url
      }*/


    return (
      <div id="siteHeader">
        /*<img className='logo' width="300" src="{logo_image_url}"/>*/
        <span>The Heading!</span>
      </div>
    )
  }
}


export default Header;
