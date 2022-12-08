import axios from "axios";

const client = axios.create({
  baseURL: "https://assessment-users-backend.herokuapp.com/"
});

const getUsers = () => {
  return client.get("/users.json");
};

const addUser = user => {
  return client.post("/new", { ...user });
};

const updateUser = user => {
  return client.post("/edit", { ...user });
};

export { getUsers, addUser, updateUser };