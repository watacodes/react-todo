/* eslint-disable react/prop-types */

function TodoList({ todoList, setTodoList }) {
  const toggleCompleted = (todo) => {
    setTodoList(
      todoList.map((item) =>
        item.todo === todo ? { ...item, isCompleted: !item.isCompleted } : item
      )
    )
  }
  return (
    <ul>
      {todoList.map((item) => {
        const styles = {
          textDecoration: item.isCompleted ? "line-through" : "none",
        }

        return (
          <li key={item.id}>
            <input
              type="checkbox"
              name={item.todo}
              id={item.todo}
              checked={item.isCompleted}
              onChange={() => toggleCompleted(item.todo)}
            />
            <label htmlFor={item.todo} style={styles}>
              {item.todo}
            </label>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList
