import React from 'react'

export default function Main(props) {
  const {deletTodo , todos } = props
  return (
    <>
        <ul>
        {todos.map((todo , index)=>(
          <li key={index }><p>{todo}</p>
          <button className="del-btn" onClick={()=> deletTodo(index)}>Del</button>
          </li>
        ))}
      </ul>
    </>
  )
}
