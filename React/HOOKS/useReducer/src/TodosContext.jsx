/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

// 1. Create the contexts (one for state, one for dispatch)
const TodosContext = createContext();
const TodosDispatchContext = createContext();
// const initialTodos = [];
const initialTodos = [{ id: "1", name: "Learn React Hooks", complete: false }];

// 2. create the provider component
// 3. put state and dispatch in the provider and delegate to the contexts
export default function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
}

// 4. Export the contexts (useTasks, useTasksDispatch)
export function useTodos() {
  return useContext(TodosContext);
}

export function useTodosDispatch() {
  return useContext(TodosDispatchContext);
}

// 5. define the reducer which manages the state
function reducer(todos, action) {
  switch (action.type) {
    case "add-todo": {
      return [...todos, action.payload];
    }
    case "toggle-todo": {
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });
    }
    case "delete-todo": {
      return todos.filter((todo) => todo.id !== action.payload.id);
    }
    default: {
      return todos;
    }
  }
}

TodosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
