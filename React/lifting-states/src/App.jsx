import './App.css';

import Accordion_Normal from './Normal-Panels';
import Accordion_Lifting from './Lifting-Panels';

import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>
        <Accordion_Normal/>

        <h1>............................................</h1>

        <Accordion_Lifting/>
      </>
    );
  }
}

export default App;