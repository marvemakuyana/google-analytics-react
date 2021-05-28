import React, { Component } from 'react';
import ReactGA from 'react-ga';

class App extends Component {
  handleGitHub =() => {
    ReactGA.event({
      category: 'Links',
      action: 'Github',
      label: 'Github button clicked!',
      value: 1
    })
  }
  handleStackBlitz =() => {
    ReactGA.event({
      category: 'Links',
      action: 'StackBlitz',
      label: 'StarBlitz button clicked!',
      value: 1
    })
  }
  
  render() {
    return (
      <div >
        <h4>Home</h4>
        <p>This is Home page.</p>
        <input type='button' value='Download GitHub Source' onClick={this.handleGitHub}/>
        <input type='button' value='StackBlitz Project' onClick={this.handleStackBlitz} style={{ marginLeft: 15}} />
      </div>
    );
  }
 
}

export default App;
