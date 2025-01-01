import { useEffect, useState } from "react"
import TodoList from "./TodoList"
import "./index.css"
import AddTodo from "./AddTodo"

function App() {
  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  )

  // add todos to the local storage

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList))
  }, [todoList])

  /* a single todo should be an object of id, todo and iscompleted. 
  [{
    id: number,
    todo: string,
    iscompleted: false,
  }]
  */

  const handleAddTodo = () => {
    console.log("todo: ", todo)
    console.log("todolist: ", todoList)

    if (todo && !todoList.some((item) => item.todo === todo)) {
      const newItem = {
        id: crypto.randomUUID(),
        todo: todo,
        isCompleted: false,
      }
      setTodoList([...todoList, newItem])
    }
    setTodo("")
  }

  return (
    <main>
      <h1>React Todo List App</h1>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <AddTodo todo={todo} setTodo={setTodo} onHandle={handleAddTodo} />
    </main>
  )
}

export default App
