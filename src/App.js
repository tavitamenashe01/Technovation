import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import MyProfile from './components/MyProfile';
import NavBottom from './components/NavBottom';
import Map from './components/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <MyProfile/>  */}
      <Map />
      <NavBottom/> 
      </div>
    );
  }
}

export default App;
