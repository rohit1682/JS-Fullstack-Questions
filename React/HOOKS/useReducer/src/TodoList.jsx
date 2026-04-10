import React from "react";
import Todo from "./Todo";
import { useTodos } from "./TodosContext";

export default function TodoList() {
  const todos = useTodos();
  return (
    <ul style={{ listStyle: "none", paddingLeft: ".5rem" }}>
      {todos.map((todo) => (
        <li style={{ listStyleType: "none" }} key={todo.id}>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
}
