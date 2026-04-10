import React from 'react'
import { ThemeContext } from './App'

export default function FunctionalComponent() {
    const darkTheme = React.useContext(ThemeContext);

    const themeStyle = {
        color: darkTheme? "white" : "black",
        backgroundColor: darkTheme? "black" : "white",
        border: `2px solid ${darkTheme? "white"  :"black"}`,
        height: "100px",
        width: "100px",
        padding: "2rem",
        margin: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

  return (
    <div style={themeStyle}>FunctionalComponent</div>
  )
}
