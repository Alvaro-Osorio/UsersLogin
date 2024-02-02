export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "AddUser":
      return [
        ...state,
        {
          ...action.payload,
          id: new Date().getTime(),
        },
      ];
      case "DeleteUser":
        return state.filter((user) => user.id != action.payload);
   
      case "UpdateUser":
        return state.filter((user) => user.id === action.payload);
      
    default:
      return state;
  }
};
