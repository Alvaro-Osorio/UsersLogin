import { UserRow } from "./UserRow";

export const UsersList = ({ handlerUserSelected, handlerDeleteUser, users = [] }) => {
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
        {users.map(({ id, username, email ,password}) => (
          <UserRow
            key={id}
            id={id}
            username={username}
            email={email}
            password={password}
            handlerDeleteUser={handlerDeleteUser}
            handlerUserSelected={handlerUserSelected}
          />
        ))}
      </tbody>
    </table>
  );
};
