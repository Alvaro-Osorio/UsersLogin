import { UserRow } from "./UserRow";

export const UsersList = ({ users = [] }) => {
  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>Clave</th>
          <th>Usuario</th>
          <th>Correo</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, username, email }) => (
          <UserRow key={id} id={id} username={username} email={email} />
        ))}
      </tbody>
    </table>
  );
};
