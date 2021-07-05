import React from 'react';
import TodoForm from './components/TodoForm';

const toDos = [
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
      toDos: toDos
    }
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
      </div>
    );
  }
}

export default App;
