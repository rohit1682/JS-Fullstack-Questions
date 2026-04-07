import React from "react";
import PropTypes from "prop-types";
import { useTodosDispatch } from "./TodosContext";

export default function Todo({ todo }) {
  const dispatch = useTodosDispatch();
  // console.log('dispatch ', dispatch)
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#fff" }}>
        {todo.name}
      </span>
      {"  "}
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: "toggle-todo",
            payload: { id: todo.id },
          });
        }}
      >
        Toggle
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: "delete-todo",
            payload: { id: todo.id },
          });
        }}
      >
        Delete
      </button>
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
  }).isRequired,
};
