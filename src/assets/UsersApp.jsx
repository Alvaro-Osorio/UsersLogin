import { useReducer, useState } from "react";
import { UserForm } from "../components/UserForm";
import { UsersList } from "../components/UsersList";
import { usersReducer } from "../reducers/usersReducer";

const initialUsers = [
  {
    id: 1,
    username: "Pepe",
    password: "12345",
    email: "pepe@correo.com",
  },
];

const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};

export const UsersApp = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);

  const [userSelected, setUserSelected] = useState(initialUserForm);

  const handlerAddUser = (user) => {
    let type = (user.id === 0)?'AddUser':'UpdateUser';
    console.log(user.id);
    console.log(type);
    dispatch({
      type: type,
      payload: user,
    });
  };

  const handlerDeleteUser = (id) => {
    dispatch({
      type: "DeleteUser",
      payload: id,
    });
  };

  const handlerUserSelected = (user) => {
    setUserSelected({ ...user });
  };

  return (
    <div className="container my-4">
      <h2>Usuarios</h2>

      <div className="row">
        <div className="col">
          <UserForm
            initialUserForm={initialUserForm}
            userSelected={userSelected}
            handlerAddUser={handlerAddUser}
          />
        </div>
        <div className="col">
          {users.length === 0 ? (
            <div className="alert alert-warning">
              ¡No hay usuarios registrados!
            </div>
          ) : (
            <UsersList
              users={users}
              handlerDeleteUser={handlerDeleteUser}
              handlerUserSelected={handlerUserSelected}
            />
          )}
        </div>
      </div>
    </div>
  );
};
