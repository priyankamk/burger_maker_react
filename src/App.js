import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import LikeButton from './LikeButton.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stack: ['bun', 'cheese', 'cheese']
    }
  }

  addBun = () => {
    // requirement from react =  when you update state 
    // you need to update it without mutation

    // var newStack = this.state.stack.slice(0);
    // newStack.push('bun')
    // var a = [1, 2, 3]
    // spread syntax
    // var b = [...a] // b = a.slice(0)
    // var newStack = [...this.state.stack]

    this.setState({
      stack: [...this.state.stack, "bun"]
    })
  }

  addCheese = () => {
    this.setState({
      stack: [...this.state.stack, "cheese"]
    })
  }

  removeIngredient = (event) => {
    console.log(event.target.id); // the one to remove

    //setState - which one?
    this.setState({
      stack: this.state.stack.filter(function (elem, index) {
        // console.log(index);
        return index !== Number(event.target.id)
      })
    })
  }


  render() {
    return (
      <div className="App" >
        <aside>
          <button onClick={this.addBun}>Bun</button>
          <button onClick={this.addCheese}>Cheese</button>
        </aside>

        <main>
          {this.state.stack.map((ingredient, index) => {
            return <div
              key={index}
              id={index}
              onClick={this.removeIngredient}
              className={ingredient}>
              {ingredient}
            </div>
          })}

          {/* <div className="bun">bun</div>
          <div className="cheese">Cheese</div>
          <div className="bun">bun</div> */}
        </main>

      </div>
    );
  }
}

export default App;
