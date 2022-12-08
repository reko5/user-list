import React, { useState, useEffect } from "react";
import { getUsers } from "../services/UsersService";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await getUsers();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div>
        {users.map((users) => (
          <div key={users.id}>
            {users.first_name}, {users.last_name}, {users.created_at}
          </div>
        ))}
      </div>
    </>
  );
}
