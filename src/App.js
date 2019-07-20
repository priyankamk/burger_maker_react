import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import LikeButton from './LikeButton.js';
import { pluralize, prettyIngredient } from './lib'

// var pluralize = lib.pluralize

class App extends Component {
  constructor(props) {
    super(props)
    // this.color = 'green';
    // this.safety = 'weak';
    this.state = {
      stack: ['bun', 'cheese', 'cheese', 'tomato', 'lettuce']
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

  addTomato = () => {
    this.setState({
      stack: [...this.state.stack, "tomato"]
    })
  }

  addLettuce = () => {
    this.setState({
      stack: [...this.state.stack, "lettuce"]
    })
  }

  removeIngredient = (id) => {
    // which one to remove- ingredient
    // console.log(event.target.id); // the one to remove
    //setState - which one?
    this.setState({
      stack: this.state.stack.filter(function (elem, index) {
        // console.log(index);
        return index !== id
      })
    })
  }

  render() {

    var { stack } = this.state

    return (
      <div className="App" >
        <aside>
          <button onClick={this.addBun}>Bun</button>
          <button onClick={this.addCheese}>Cheese</button>
          <button onClick={this.addTomato}>Tomato</button>
          <button onClick={this.addLettuce}>Lettuce</button>
        </aside>

        <main>
          {this.state.stack.map((ingredient, index) => {
            return <div
              key={index}
              // id={index}
              onClick={() => this.removeIngredient(index)}
              className={ingredient}>
              {ingredient}
            </div>
          })}
          {/* <div className="bun">bun</div>
          <div className="cheese">Cheese</div>
          <div className="bun">bun</div> */}
        </main>

        <footer>
          {stack.length} {pluralize('layer', 'layers', stack.length)} {prettyIngredient(stack, 'cheese')}
        </footer>
      </div>
    );
  }
}

export default App;
