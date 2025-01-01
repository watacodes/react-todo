import { createContext, useState } from "react"

const TodoContext = createContext()

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(() => {
    const localTodos = localStorage.getItem("todos")
    return localTodos ? JSON.parse(localTodos) : []
  })

  const addTodo = (newTodo) => {
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
    <TodoContext.Provider value={{ todoList, addTodo, toggleCompleted }}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
