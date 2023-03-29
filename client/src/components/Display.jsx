import React from 'react'

const Display = (props) => {

    const {todoList, setTodoList} = props
    return (
        <div>
            <h1>All Todo's </h1>
            <h2>{props.todoList}</h2>
        </div>
)
}

export default Display