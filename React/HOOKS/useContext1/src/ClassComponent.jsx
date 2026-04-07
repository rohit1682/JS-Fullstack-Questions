import React, { Component } from 'react'
import {ThemeContext} from './App'

export class ClassComponent extends Component {
    themeStyle(darkTheme) {
        return {
            color: darkTheme? "white" : "black",
            backgroundColor: darkTheme? "black" : "white",
            border: `2px solid ${darkTheme? "white" : "black"}`,
            height: "100px",
            width: "100px",
            padding: "2rem",
            margin: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }
    }
    
    render() {
    return (
        <ThemeContext.Consumer>
            {darkTheme => {
                return <div style={this.themeStyle(darkTheme)}>Class Component</div>
            }}
        </ThemeContext.Consumer>
    )
  }
}

export default ClassComponent