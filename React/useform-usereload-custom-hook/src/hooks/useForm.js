import React from "react";
export function useForm(initialState = { name: "" }) {
  const [formData, setFormData] = React.useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function submitForm(e) {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    alert("Form submitted successfull");
  }

  function resetForm() {
    setFormData(initialState);
  }

  return {
    formData,
    handleChange,
    submitForm,
    resetForm,
  };
}
