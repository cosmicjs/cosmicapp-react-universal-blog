// Loading.js
import React, { Component } from 'react'

export default class Header extends Component {


  render(){
    const data = this.props.data
    const text_data = data.globals.text
    const header_data = data.globals.header
    if(header_data){
    console.log("Inside header_data: " + JSON.stringify(header_data));
      }else{
        console.log("header_data DOES NOT EXIST");
      }

      if(text_data){
      console.log("My text: " + JSON.stringify(text_data));
    }else{
      console.log("text_data DOES NOT EXIST");
    }

    /*if(data.globals.header){
    var  logo_image =_.findWhere(metafields, { key: 'logo-image' });
    debbuger;
    var logo_image_url = data.globals.header.logo_image.url;
      }*/


    return (
      <div id="siteHeader">
        <div className='logo'>
          <img className='devil' src="https://cosmicjs.imgix.net/586d3d40-3252-11e6-acaf-9f0b4eab6555-ild-logo.png"/>
          <span className='strapline'>I like Devils</span>
        </div>
      </div>
    )
  }
}


export default Header;
