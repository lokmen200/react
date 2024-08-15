import { useState } from "react"
import Input from "./components/Input"
import Main from "./components/Main"


function App() {
  const [todos , setTodos] = useState([])
  const [inputValue , setInputValue] = useState('')

  function handlChange(e){
    setInputValue(e.target.value)
  }
  function addTodo(e){
    e.preventDefault()
    setTodos([...todos , inputValue])
    setInputValue('')
  }
  function deletTodo(index){
    const newTodos = [...todos]
    newTodos.splice(index ,1)
    setTodos(newTodos)
  }

  return (
    <> 
      <form className='container'>
        <input type="text" placeholder='Something You want to do ' value={inputValue} onChange={handlChange}/>
        <button onClick={addTodo}>Add</button>
      </form>
      <ul>
        {todos.map((todo , index)=>(
          <li key={index }>{todo}
          <button onClick={()=> deletTodo(index)}>Del</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
