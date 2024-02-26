import { useReducer, useState } from "react";
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
  
export const useUsers  = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers);

    const [userSelected, setUserSelected] = useState(initialUserForm);
    const [visibleForm, setVisibleForm] = useState(false);

    const handlerAddUser = (user) => {
        let type = (user.id === 0)?'AddUser':'UpdateUser';

        dispatch({
          type: type,
          payload: user,
        });
        Swal.fire({
            title: (user.id === 0) ? "Creado": "Actualizado",
            text:  (user.id === 0) ? "Usuario creado con éxito" : "Usuario actualizado con éxito",
            icon:  "success"
        });
        setVisibleForm(false);
        setUserSelected(initialUserForm);

    };

  const handlerDeleteUser = (id) => {
    Swal.fire({
        title: "Estas seguro?",
        text: "Esta acción no se puede revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
            dispatch({
                type: "DeleteUser",
                payload: id,
            });
            Swal.fire({
                title: "Eliminado!",
                text: "Registro eliminado.",
                icon: "success"
            });
        }
      });
  };

  const handlerUserSelected = (user) => {
    setVisibleForm(true);
    setUserSelected({ ...user });
  };

    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm, 
        handlerAddUser,
        handlerDeleteUser,
        handlerUserSelected,
    }

}