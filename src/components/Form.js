import React, { useState } from "react";

function Form() {
  const initialValue = {
    name: "",
    email: "",
    password: ""
  };
  const [FormData, setFormData] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log("Form submitted:", FormData);
    // Reset the form after submission
    setFormData(initialValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={FormData.name}
        onChange={handleChange}
      />
      <br />
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={FormData.email}
        onChange={handleChange}
      />
      <br />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={FormData.password}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
      <p>{JSON.stringify(FormData)}</p>
    </form>
  );
}

export default Form;
