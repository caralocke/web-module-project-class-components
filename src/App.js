import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

const todos = [
  {
    name: 'Vacuum',
    id: 1,
    completed: false
  },
  {
    name: 'Dishes',
    id: 2,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state ={
      todos: todos
    }
  }
  
  render() {
    console.log(this.state.todos)
    return (
      <div className='App'>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm />
        </div>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
