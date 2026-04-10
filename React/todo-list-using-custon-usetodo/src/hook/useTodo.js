import React from "react";

const useTodo = function () {
  const [input, setInput] = React.useState("");
  const [myList, setMyList] = React.useState([]);
  const [editingId, setEditingId] = React.useState(null);
  const [editText, setEditText] = React.useState("");

  const addTodo = () => {
    if (input.trim() === "") return;

    setMyList((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: input,
        completed: false,
      },
    ]);
    setInput("");
  };

  const toggleCheck = (id) => {
    setMyList(
      myList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setMyList(myList.filter((todo) => todo.id !== id));
  };

  const startEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    setMyList(
      myList.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setEditingId(null);
    setEditText("");
  };

  return {
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
  };
};

export default useTodo;
