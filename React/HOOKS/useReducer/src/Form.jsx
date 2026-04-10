import React, { useState } from "react";
import { useTodosDispatch } from "./TodosContext";

export default function Form() {
  const [name, setName] = useState("");
  const dispatch = useTodosDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: "add-todo",
          payload: { id: Date.now(), name, complete: false },
        });
        setName("");
      }}
    >
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </form>
  );
}
