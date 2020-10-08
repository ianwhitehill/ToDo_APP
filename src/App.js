import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import { ToDoBanner } from './ToDoBannerFile';
import { ToDoRow } from './ToDoRowFile';
import { VisibilityControl } from './VisibilityControlFile';

import 'bootstrap/dist/css/bootstrap.css';

// This is the default
export default class App extends Component {
  //  Above we have created a class called App the extends the functionality of the Component class
  //  The export keyword above makes the class available for use outside of the JS file where it is created

  // the constructor method below will run by default on App load 

  constructor() {
    super(); //built Reach method used to pass Data
    //  React components have a special property called "state".  The "state" is used to define the state of data (props)
    this.state = {
      userName: "Ian",
      todoItems: [
        { action: "Move burn pile to firepit", done: false },
        { action: "Clean Garage", done: false },
        { action: "Clean out behind the fence", done: false },
        { action: "Clean Car", done: true },
        { action: "Clean basement", done: false }
      ], //end array
      showCompleted: true
    } //end of this.state 
  } //End of constructor

  //Feature 3 
  // list of items todo (not completed) so if done bool changes the item should toggle 
  // function should desiplay rows  
  todoTableRowsFunction = (statusOfTask) =>
    this.state.todoItems.filter(x => x.done === statusOfTask).map(y =>
      <ToDoRow
        key={y.action}
        oneMappedItem={y}
        callback={this.toggleToDoFunction}// callback is a keyword allowwing 2 way data flow
      />);

  // this below is the  call back function fo the to do row component
  //this function gets the value for object that is passed into the call back prop of <ToDoRow>. Thiss passed data is being called my toggled item 
  // flipping the done prop of the todo item to true to false or false to true
  //  When setState is invoked, React will make a new object with the changes.  Under the hood React will compare the new object with the DOM version of the object.  If there is a difference between those 2 objects then the DOM will get re-drawn (NOT a reload) and then we see the changes.

  toggleToDoFunction = (myToggledItem) => this.setState({
    todoItems: this.state.todoItems.map(x => x.action === myToggledItem.action ? { ...x, done: !x.done } : x)
  });

  render = () =>
    <div>
      {/* Features 1 & 2 */}
      {/*Below is refered to as a react Stub*/}
      <ToDoBanner
        userName={this.state.userName}
        todoItems={this.state.todoItems}
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
        {/*this is feature 8*/}
        <VisibilityControl
          toggleVisibility="Completed"
          isChecked={this.state.showCompleted}
          callback={x => this.setState({ showCompleted: x })}
        />
      </div>

      {/* Features 6 & 7 */}
      {this.state.showCompleted && // <--------Feature 8
        <table className="table table-striped tabler-border">
          <thead>
            <th>Description</th>
            <th>Completed</th>
          </thead>
          <tbody>
            {this.todoTableRowsFunction(true)}
          </tbody>
        </table>}
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
