import { useReducer } from "react";
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
  username: "",
  password: "",
  email: "",
};

export const UsersApp = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);

  const handlerAddUser = (user) => {
    dispatch({
      type: "AddUser",
      payload: user,
    });
  };

  const handlerDeleteUser = (id) => {
    dispatch({
      type: "DeleteUser",
      payload: id,
    });
  };

  return (
    <div className="container my-4">
      <h2>Usuarios</h2>

      <div className="row">
        <div className="col">
          <UserForm
            initialUserForm={initialUserForm}
            handlerAddUser={handlerAddUser}
          />
        </div>
        <div className="col">
          {users.length === 0 ? (
            <div className="alert alert-warning">
              ¡No hay usuarios registrados!
            </div>
          ) : (
            <UsersList users={users} handlerDeleteUser={handlerDeleteUser} />
          )}
        </div>
      </div>
    </div>
  );
};
