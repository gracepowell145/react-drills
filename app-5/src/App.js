import React, {Component} from 'react';
import './App.css';
import Image from './Image.js';

class App extends Component {
  render() {
  return (
    <div className="App">
    <Image url={"https://cdn.vox-cdn.com/thumbor/5TO3dUW3WzVe8fWa360uneLCbvE=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13586477/knickers_the_cow.jpg"}/>
    </div>
  );
}
}
export default App;
