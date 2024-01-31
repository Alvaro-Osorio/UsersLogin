import { UserForm } from "../components/UserForm";
import { UsersList } from "../components/UsersList";

const initialUsers = [
  {
    id: 1,
    username: "Pepe",
    password: "12345",
    email: "pepe@correo.com",
  },
];
export const UsersApp = () => {
  return (
    <div className="container my-4">
      <h2>Usuarios</h2>

      <div className="row">
        <div className="col">
          <UserForm />
        </div>
        <div className="col">
          <UsersList users={initialUsers} />
        </div>
      </div>
    </div>
  );
};
