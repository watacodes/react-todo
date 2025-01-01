import React from "react"
import TodoList from "./components/TodoList"
import "./index.css"
import AddTodo from "./components/AddTodo"
import ThemeToggleButton from "./components/ThemeToggleButton"
import useTheme from "./hooks/useTheme"

const App = () => {
  const { theme } = useTheme

  const styles = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
    padding: "20px",
    borderRadius: "5px",
  }

  return (
    <div style={styles}>
      <h1>React Todo List App</h1>
      <ThemeToggleButton />
      <TodoList />
      <AddTodo />
    </div>
  )
}

export default App
