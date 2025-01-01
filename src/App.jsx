import { useEffect, useState } from "react"
import TodoList from "./components/TodoList"
import "./index.css"
import AddTodo from "./components/AddTodo"

function App() {
  const [todoList, setTodoList] = useState(() => {
    const localTodos = localStorage.getItem("todos")
    return localTodos ? JSON.parse(localTodos) : []
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList))
  }, [todoList])

  const handleAddTodo = (newTodo) => {
    console.log("new todo: ", newTodo)
    console.log("todolist: ", todoList)
    setTodoList([
      ...todoList,
      { id: crypto.randomUUID(), completed: false, todo: newTodo },
    ])
  }

  const toggleCompleted = (todo) => {
    setTodoList(
      todoList.map((item) =>
        item.todo === todo ? { ...item, completed: !item.completed } : item
      )
    )
  }

  return (
    <main>
      <h1>React Todo List App</h1>
      <TodoList toggleCompleted={toggleCompleted} todoList={todoList} />
      <AddTodo addTodo={handleAddTodo} />
    </main>
  )
}

export default App
