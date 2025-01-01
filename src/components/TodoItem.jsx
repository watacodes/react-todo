/* eslint-disable react/prop-types */
function TodoItem({ todo, styles, toggleCompleted }) {
  return (
    <li>
      <input
        type="checkbox"
        name={todo.todo}
        id={todo.todo}
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.todo)}
      />
      <label htmlFor={todo.todo} style={styles}>
        {todo.todo}
      </label>
    </li>
  )
}

export default TodoItem
