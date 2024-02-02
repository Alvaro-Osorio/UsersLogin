export const UserRow = ({ handlerUserSelected, handlerDeleteUser, id, username, email, password }) => {

  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button 
          type="button" 
          className="btn btn-secondary btn-sm"
          onClick={() => handlerUserSelected({
              id : id,
              username : username,
              email : email,
              password : password,
          })}  
        >
          Editar
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => handlerDeleteUser(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
