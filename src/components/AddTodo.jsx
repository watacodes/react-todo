import { useState } from "react"
import useTodo from "../hooks/useTodo"

const AddTodo = () => {
  const { addTodo } = useTodo()
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
      <button onClick={handleAdd}>Add todo</button>
    </>
  )
}

export default AddTodo
