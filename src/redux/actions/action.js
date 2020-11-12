export const getUsers = () => ({
  type: "GET_USERS",
});

export const usersReceived = (users) => ({
  type: "USERS_RECEIVED",
  users,
});
