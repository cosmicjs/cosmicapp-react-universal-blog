// NoMatch.js
import React from 'react'
import { Link } from 'react-router'
import config from '../../config'


// Dispatcher
import AppDispatcher from '../../dispatcher/AppDispatcher'

export default class NoMatch extends React.Component {

  componentWillMount(){
    this.getPageData()
  }

  componentDidMount(){
    const data = this.props.data
    document.title = config.site.title + ' | Page Not Found'
  }

  getPageData(){
    AppDispatcher.dispatch({
      action: 'get-page-data',
      slug: 'home'
    })
  }

  render(){

    const data = this.props.data
    const page = data.page

    return (
      <div id="noMatch">
          Whoa!  Looks like you stumbled down a worm hole!<br />
          If this is a new page that you've added in Cosmic JS, make sure you add it to your <code>routes.js</code> file!
          <br/>
          <br/>
          <Link to="/">Take me home</Link>
      </div>
    )
  }
}

export default NoMatch;
