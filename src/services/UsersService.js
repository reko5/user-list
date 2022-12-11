import axios from "axios";

const client = axios.create({
  baseURL: "https://assessment-users-backend.herokuapp.com/"
});
/*
const configAxios = {
  headers: {
   'Content-Type': 'application/json',
   },
};
*/
const getUsers = () => {
  return client.get("/users.json");
};

const addUser = user => {
  return client.post("/users.json", { ...user }, /*configAxios*/);
};

const updateUser = (userId, user) => {
  return client.put(`/users/${userId}.json`, { ...user }, /*configAxios*/);
};

export { getUsers, addUser, updateUser };