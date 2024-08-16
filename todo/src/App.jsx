import { useState } from "react"
import Input from "./components/Input"
import Main from "./components/Main"
import Card from "./components/Card"


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
       <Card/>
      <Input  inputValue = {inputValue} handlChange = {handlChange} addTodo = {addTodo} />
      <Main todos = {todos} deletTodo = {deletTodo}/>
    </>
  )
}

export default App
