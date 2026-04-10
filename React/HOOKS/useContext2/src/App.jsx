import React from 'react';
import FunctionalComponent from './FunctionalComponent';
import ThemeContextProvider from './ThemeContext';

import './App.css';

function App() {
  return (
    <ThemeContextProvider > 

      <FunctionalComponent /> 

    </ThemeContextProvider>
  )
}

export default App
