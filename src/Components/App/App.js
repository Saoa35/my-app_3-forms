import React from 'react';
import './App.css';
// import ControlledComponent from '../ControlledComponent/ControlledComponent';
// import PropTypesEx from '../PropTypesEx/PropTypesEx';


class App extends React.Component {
  
  render() {

    const color = 'red';

    const inlineStyles = {
      color

    }

    return (
      <div className="App">
        {/* <ControlledComponent /> */}
        {/* <PropTypesEx name='Oleksandr' age={37} /> */}

        <h2 style={inlineStyles}>
          Text in h2 (App)
        </h2>

        <h3 className='h3-test'>Test text 1</h3>
        <h3 className='h3-test'>Test text 2</h3>
        <h3 className='h3-test'>Test text 3</h3>
      </div>
    );
  }
}

export default App;
