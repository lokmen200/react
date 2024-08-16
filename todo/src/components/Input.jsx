import React from 'react'

export default function Input(props) {
  const {inputValue , handlChange , addTodo} = props
  return (
    <>
      <form className='container'>
        <input type="text" placeholder='Something You want to do ' value={inputValue} onChange={handlChange}/>
        <button onClick={addTodo}>Add</button>
      </form>
    </>
  )
}
