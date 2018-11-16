import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../css/App.css';

class App extends Component {

  // Initilize List
  // ==============
  constructor(prop) {
    super(prop);
    this.state = {
      list: [
        { id:1542401592423, task:'Learn React'},
        { id:1542401592347, task:'Climb Mt. Everest' },
        { id:1542401592447, task:'Run a marathon' },
        { id:1542401592227, task:'Feed the dogs' }
      ],
      task: 'Enter task here...'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handles user inputs submitted on the form
  // =========================================
  handleSubmit(event) {
    event.preventDefault()
    if (!this.state.task.length) {
      return;
    }
    const newTodo = {
      id: Date.now(),
      task: this.state.task
    };
    this.setState(currentState => ({
      list: this.state.list.concat(newTodo),
      task: ''
    }));
  }

  // Handles the list state
  // ======================
  handleChange(event) {
    this.setState({
      task: event.target.value
    });
  }

  // Reders the Todo App to the browser client
  // =========================================
  render() {
    // this.state.list
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello
            <img src={logo} className="App-logo" alt="logo"/>
            <code>Dojo</code>
          </p>
          <a className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">Learning React
          </a>
        </header>

        <div className="container flexed">
          <div className="left-side">
            <h2 className="heading">
              <code>Things I need to do:</code>
            </h2>
            <TodoList list={ this.state.list } />
          </div>
          <div className="right-side">
            <form onSubmit={ this.handleSubmit }>
              <h2><code>Add a New TODO</code></h2>
              <input id="new-todo"
                onChange={ this.handleChange }
                className="input-entry"
                placeholder={ this.state.task }
              />
              <button className="btn"> SUBMIT </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// Display the items in the List
// =============================
class TodoList extends Component {
  render() {
    return (
      <ul>
        <code>{
          this.props.list.map(aTodo => (
            <li key={ aTodo.id }>
              <span>{ aTodo.task }</span>
            </li>
          ))}
        </code>
      </ul>
    );
  }
}

export default App;
