/* eslint-disable react/prop-types */
function AddTodo({ todo, setTodo, onHandle }) {
  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => onHandle(todo)}>Add todo</button>
    </>
  )
}

export default AddTodo
