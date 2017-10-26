import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './components/TextInput';
import ButtonAdd from './components/ButtonAdd';
import Tasks from './components/Tasks';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: ''
    };
  }

  onChange(t) {
    this.setState({ newTask: t });
  }

  onClick() {
    // se clonan las tareas (simlar a append)
    const newTasks = [...this.state.tasks, { text: this.state.newTask, createdAt: new Date() }];
    this.setState({ tasks: newTasks, newTask: '' });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className='container'>
          <TextInput text={this.state.newTask} onChange={t => this.onChange(t)} />

          <ButtonAdd onClick={() => this.onClick()} disabled={this.state.newTask.length <= 0} />

          <Tasks tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default App;
