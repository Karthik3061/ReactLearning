import React, { useState, useEffect } from 'react'
import './App.css'


function App() {
 const [todos, setTodos] = useState([])


 React.useEffect(()=>{
  setInterval(()=>{
    fetch('http://localhost:3000/todos',{method: 'GET'}).then((response)=>{
      response.json().then((data)=>{
        console.log(data)
        setTodos(data)
      })
    })},100)

 }, [])

  return (
    <div>
    {todos.map((todo)=> {
        return <Todo title={todo.title} description={todo.description}> </Todo>
    })}
    </div>
  )
}

function Todo(props) {
  return <div>
    {props.title} {props.description} <button>Delete</button>
    <br />
  </div>
}


export default App