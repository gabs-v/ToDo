import React, {useRef, useState} from 'react'

const Form = (props) => {
    const [heading, setHeading] = useState('')
    const [description, setDescription] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const {todoList, setTodoList} = props

    const createTask = (e) => {
        e.preventDefault()
        
        const newTask = [heading, description];
        console.log('New task made', {newTask})
        setHeading('')
        setDescription('')
        setSubmitted(true)
    }


    
  return (
    <div>
        <form onSubmit={createTask}>
            <div>
                <label>Heading:</label>
                <input type='text' onChange={(e) => setHeading(e.target.value)} />
            </div>
            <div>
                <label>Description:</label>
                <input type='textarea'onChange={(e) =>setDescription(e.target.value)} />
            </div>
            <input type='submit' />
        </form>
    </div>
  )
}

export default Form