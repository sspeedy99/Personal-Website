import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Dashboard from './Components/Dashboard';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
// eslint-disable-next-line 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Navbar /> */}
          <Switch>
            < Route exact path = '/' component = {Dashboard}/>
          </Switch>
        </div>
        <Skills/>
        <Projects/>
        <Footer/>
      </BrowserRouter>
    )
  }
}

export default App;
