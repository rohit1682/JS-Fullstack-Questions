import React from "react";
import useTodo from "../hook/useTodo";

export default function TodoList() {
  const {
    input,
    setInput,
    myList,
    addTodo,
    toggleCheck,
    deleteTodo,
    editingId,
    editText,
    setEditText,
    startEdit,
    saveEdit,
  } = useTodo();

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {myList.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
            }}
          >
            <input
              type="checkbox"
              onChange={() => toggleCheck(todo.id)}
              checked={todo.completed}
              readOnly
            />

            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => saveEdit(todo.id)}>Save</button>
              </>
            ) : (
              <>
                <p
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </p>
                <button onClick={() => startEdit(todo.id, todo.text)}>
                  Edit
                </button>
              </>
            )}

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
