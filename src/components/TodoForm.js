import React from 'react'

class TodoForm extends React.Component {

    constructor(){
        super()
        this.state = {
            input: ''
        }
    }

    handleChanges = event => {
        console.log(event.target.value)
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addTodo(this.state.input)
    }

    render(){
       return (
        <form onSubmit={this.handleSubmit}>
            <input className='input' onChange={this.handleChanges} type='text' name='item' placeholder='Add todo here' />
            <button className='add-btn'>Add Todo</button>
        </form>
      )
    }
}

export default TodoForm