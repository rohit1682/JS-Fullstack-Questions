/* eslint-disable react-refresh/only-export-components */

import React from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

import './App.css'

export const ThemeContext = React.createContext();

function App() {

  const [darkTheme, setDarkTheme] = React.useState(false);

  function toggleDarkTheme() {
    setDarkTheme( (previous) => !previous );
  }

  // const themeStyle = {
  //    color: darkTheme? "white" : "black",
  //       backgroundColor: darkTheme? "black" : "white",
  //       border: `2px solid ${darkTheme? "white" : "black"}      `,
  //       height: "100px",
  //       width: "100px",
  //       padding: "2rem",
  //       margin: "2rem",
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  // }

  return (
    
    <>
      {/* the value={darkTheme} useState will be accessed by all the children components by using the context component */}
      
      <ThemeContext.Provider value={darkTheme} > 

        <button onClick={toggleDarkTheme}>Toggle Theme</button>

        <ClassComponent /> 
        <FunctionalComponent /> 

      </ThemeContext.Provider>

    </>
    
  )
}

export default App
