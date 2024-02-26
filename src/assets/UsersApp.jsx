import { UserForm } from "../components/UserForm";
import { UsersList } from "../components/UsersList";
import { useUsers } from "../hooks/useUsers";

export const UsersApp = () => {
 
const {
    users,
    userSelected,
    initialUserForm,

    handlerAddUser,
    handlerDeleteUser,
    handlerUserSelected,
} = useUsers();

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
          <button className="btn btn-primary my-2">Nuevo usuario</button>
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
