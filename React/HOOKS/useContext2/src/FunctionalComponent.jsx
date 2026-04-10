import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

export default function FunctionalComponent() {

    const darkTheme = useTheme()
    const toggleDarkTheme = useThemeUpdate()

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
    <>
      <button onClick={toggleDarkTheme}>Toggle Theme</button>
      <div style={themeStyle}>FunctionalComponent</div>
    </>
  )
}
