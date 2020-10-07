import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import {ToDoBanner} from './ToDoBannerFile';

import 'bootstrap/dist/css/bootstrap.css';

// This is the default
export default class App extends Component{
  //  Above we have created a class called App the extends the functionality of the Component class
  //  The export keyword above makes the class available for use outside of the JS file where it is created

  // the constructor method below will run by default on App load 

  constructor() {
    super(); //built Reach method used to pass Data
    //  React components have a special property called "state".  The "state" is used to define the state of data (props)
    this.state = {
      userName: "Ian",
      todoItems: [
        {action: "Move burn pile to firepit", done: false},
        {action: "Clean Garage", done: false},
        {action: "Clean out behind the fence", done: false},
        {action: "Clean Car", done: true},
        {action: "Clean basement", done: false}
      ] //end array
    } //end of this.state 
  } //End of constructor

  render = () => 
  <div>
    {/* Features 1 & 2 */}
    {/*Below is refered to as a react Stub*/}
    <ToDoBanner  
        userName = {this.state.userName}
        todoItems = {this.state.todoItems}
    /> 

  </div>

}// End of class

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;
