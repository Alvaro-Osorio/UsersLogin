import { useState } from "react";

export const UserForm = () => {
  const initialUserForm = {
    username: "",
    password: "",
    email: "",
  };

  const [userForm, setUserForm] = useState();

  const onInputChange = ({ target }) => {
    console.log(target.value);
  };
  return (
    <>
      <form>
        <input
          className="form-control my-3 w-75"
          placeholder="Usuario"
          name="username"
          onChange={onInputChange}
        />
        <input
          className="form-control my-3 w-75"
          placeholder="Email"
          name="email"
          onChange={onInputChange}
        />
        <input
          className="form-control my-3 w-75"
          placeholder="Password"
          name="password"
          type="password"
          onChange={onInputChange}
        />
        <button className="btn btn-primary">Crear</button>
      </form>
    </>
  );
};
