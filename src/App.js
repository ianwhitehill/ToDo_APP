import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import {ToDoBanner} from './ToDoBannerFile';
import {ToDoRow} from './ToDoRowFile';

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

  //Feature 3 
  // list of items todo (not completed) so if done bool changes the item should toggle 
  // function should desiplay rows  
  todoTableRowsFunction = (statusOfTask) =>
    this.state.todoItems.filter(x => x.done === statusOfTask).map( y =>
    <ToDoRow 
      key = {y.action}
      oneMappedItem = {y}
    />);

  render = () => 
  <div>
    {/* Features 1 & 2 */}
    {/*Below is refered to as a react Stub*/}
    <ToDoBanner  
        userName = {this.state.userName}
        todoItems = {this.state.todoItems}
    /> 
    {/* Features 3 & 4 */}
    <table className="table table-striped tabler-border">
      <thead>
        <th>Description</th>
        <th>Marked on Completion</th>
      </thead>
      <tbody>
        {this.todoTableRowsFunction(false)}
      </tbody>
    </table>

      <div className="bg-secondary text-white text-center p-2">
      </div>

      {/* Features 6 & 7 */}
      <table className="table table-striped tabler-border">
      <thead>
        <th>Description</th>
        <th>Completed</th>
      </thead>
        <tbody>
        {this.todoTableRowsFunction(true)}
        </tbody>
      </table>   
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
