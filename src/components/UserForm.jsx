import { useState } from "react";

const initialUserForm = {
  username: "pepe",
  password: "12345",
  email: "pepe@correo.com",
};

export const UserForm = () => {
  const [userForm, setUserForm] = useState(initialUserForm);

  const { username, email, password } = userForm;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          className="form-control my-3 w-75"
          placeholder="Usuario"
          name="username"
          value={username}
          onChange={onInputChange}
        />
        <input
          className="form-control my-3 w-75"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
        <input
          className="form-control my-3 w-75"
          placeholder="Password"
          name="password"
          type="password"
          value={password}
          onChange={onInputChange}
        />
        <button className="btn btn-primary" type="submit">
          Crear
        </button>
      </form>
    </>
  );
};
