import axios from "axios";

const client = axios.create({
  baseURL: "https://assessment-users-backend.herokuapp.com/",
});

const getUsers = () => {
  return client.get("/users.json");
};

const getUserById = (userId) => {
  return client.get(`/users/${userId}.json`);
};

const addUser = (user) => {
  return client.post("/users.json", { ...user });
};

const updateUser = (userId, user) => {
  return client.put(`/users/${userId}.json`, { ...user });
};

export { getUsers, getUserById, addUser, updateUser };
