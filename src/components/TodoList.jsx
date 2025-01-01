import TodoItem from "./TodoItem"

/* eslint-disable react/prop-types */

function TodoList({ toggleCompleted, todoList }) {
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
