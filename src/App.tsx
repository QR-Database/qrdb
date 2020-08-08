import React, { useEffect, useState } from "react";
import { getUserData } from "./services/api";

function App() {
  const [users, setUsers] = useState<Array<any>>([]);
  useEffect((): any => {
    const fetchUserData = async () => {
      await getUserData().then((data) => setUsers(data));
    };
    fetchUserData();
  }, []);

  return (
    <>
      {users.map(({ user_id, username }) => (
        <div key={user_id}>{username}</div>
      ))}
    </>
  );
}

export default App;
