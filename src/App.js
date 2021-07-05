import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'
import './components/Todo.css'

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

  toggleTodo = id => {
    console.log(id)
    this.setState({
      ...this.state.todos,
      todos: this.state.todos.map(todo => {
        if (todo.id === id){
          return({
            ...todo, completed: !todo.completed
          })
        } else {
          return todo
        }
      })
    })
  }

  addTodo = name => {
    const newTodo ={
      name: name,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  clearCompleted = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return todo.completed === false
      })
    })
  }
  
  render() {
    console.log(this.state.todos)
    return (
      <div className='App'>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList clearCompleted={this.clearCompleted} todos={this.state.todos} toggleTodo={this.toggleTodo}/>
      </div>
    );
  }
}

export default App;
