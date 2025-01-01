import { useState } from "react"

/* eslint-disable react/prop-types */
function AddTodo({ addTodo }) {
  const [todo, setTodo] = useState("")

  const handleAdd = () => {
    if (todo.trim() === "") return
    addTodo(todo.trim())
    setTodo("")
  }

  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => handleAdd(todo)}>Add todo</button>
    </>
  )
}

export default AddTodo
