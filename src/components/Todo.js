import React from 'react'

const Todo = props => {

    const handleClick = () => {
        console.log('todo' + props.todo.name)
        props.toggleTodo(props.todo.id)
    }
    return(
        <div onClick={handleClick}>
            <p>{props.todo.name}</p>
        </div>
    )
}

export default Todo