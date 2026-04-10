/* eslint-disable react-refresh/only-export-components */
import React from 'react'

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
    return React.useContext(ThemeContext)
}

export function useThemeUpdate() {
    return React.useContext(ThemeUpdateContext)
}

export default function ThemeContextProvider({children}) {

    const [darkTheme, setDarkTheme] = React.useState();

    function toggleTheme() {
        setDarkTheme (previousTheme => !previousTheme)
    }

  return (
    <ThemeContext.Provider value = {darkTheme} >
        <ThemeUpdateContext.Provider value = {toggleTheme}>
            {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}
