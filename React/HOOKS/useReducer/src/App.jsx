import Form from "./Form";
import TodoList from "./TodoList";
import TodosProvider from "./TodosContext";

function App() {
  return (
    <TodosProvider>
      <Form />
      <TodoList />
    </TodosProvider>
  );
}

export default App;
