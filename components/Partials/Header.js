import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Header extends Component  {

        getChildContext() {
            return { muiTheme: getMuiTheme(baseTheme) };
        }

        render() {


            return (
                <div>
                    <AppBar
                        title="Title"
                    />

                </div>
            );
        }
    }

    Header.childContextTypes = {
        muiTheme: React.PropTypes.object.isRequired,
    };
