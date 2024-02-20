import { useEffect, useState } from "react";

export const UserForm = ({ userSelected, handlerAddUser, initialUserForm }) => {
  const [userForm, setUserForm] = useState(initialUserForm);

  const { id, username, email, password } = userForm;

  useEffect(() => {
    setUserForm({
      ...userSelected,
    });
  }, [userSelected]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!username || (!password && id===0) || !email) {
      alert("Formulario incompleto");
      return;
    }
    handlerAddUser(userForm);
    setUserForm(initialUserForm);
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
        {id > 0 ? '':
        <input
          className="form-control my-3 w-75"
          placeholder="Password"
          name="password"
          type="password"
          value={password}
          onChange={onInputChange}
        />
        }
        <input  
          type="hidden" 
          name="id" 
          value={id} 
        />
       {id > 0 ? 
        (<button className="btn btn-secondary" type="submit">
          Editar
        </button>)
        :
        (<button className="btn btn-primary" type="submit">
          Crear
        </button>)
        }
      </form>
    </>
  );
};  
  