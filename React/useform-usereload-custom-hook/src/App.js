import "./styles.css";
import React from "react";
import { useForm } from "./hooks/useForm";
import { useReload } from "./hooks/useReload";

export default function App() {
  const { formData, handleChange, submitForm, resetForm } = useForm();
  // const reload = useReload();
  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={formData.name}
          name="name"
          placeholder={"Enter Name"}
          onChange={handleChange}
        />
        <input type="submit" />
        <input type="button" value={"Reset"} onClick={() => reload()} />
      </form>

      <h2>Start editing to see some magic happen!{formData.name}</h2>
    </div>
  );
}
