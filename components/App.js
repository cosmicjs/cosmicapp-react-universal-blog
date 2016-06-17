// App.js
import React from 'react'

import '../styles/custom.scss';



//Images
import Background from '../images/about-bg.jpg';

// Dispatcher
import AppDispatcher from '../dispatcher/AppDispatcher'

// Store
import AppStore from '../stores/AppStore'

// Components
import SiteMenu from './Partials/SiteMenu'
import Footer from './Partials/Footer'
import Loading from './Partials/Loading'
import Header from './Partials/Header'


export default class App extends React.Component {



  // Add change listeners to stores
  componentDidMount(){
    AppStore.addChangeListener(this._onChange.bind(this))
  }

  // Remove change listeners from stores
  componentWillUnmount(){
    AppStore.removeChangeListener(this._onChange.bind(this))
  }

  getStore(){
    AppDispatcher.dispatch({
      action: 'get-app-store'
    })
  }

  _onChange(){
    this.setState(AppStore)
  }

  render(){

    const data = AppStore.data


    // Show loading for browser
    if(!data.ready){

      document.body.className = ''
      this.getStore()

      let style = {
        marginTop: 120
      }
      return (
        <div className="container text-center" style={ style }>
          <Loading />
        </div>
      )
    }

    // Server first
    const Routes = React.cloneElement(this.props.children, { data: data })

    return (
      <div id="outer-container">
          <SiteMenu data={ data }/>
          <Header data={ data }/>
            <div id="main-content" className="container">
              { Routes }
              <Footer data={ data }/>
           </div>
      </div>
    )
  }
}
