import TodoItem from "./TodoItem"
import useTodo from "../hooks/useTodo"

const TodoList = () => {
  const { todoList, toggleCompleted } = useTodo()

  return (
    <ul>
      {todoList.map((item) => {
        const styles = {
          textDecoration: item.completed ? "line-through" : "none",
        }

        return (
          <TodoItem
            key={item.id}
            todo={item}
            styles={styles}
            toggleCompleted={toggleCompleted}
          />
        )
      })}
    </ul>
  )
}

export default TodoList
