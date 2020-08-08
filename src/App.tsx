import React from "react";
import { getUserData } from "./services/api";

function App() {
  const [user, setUser] = React.useState<Array<any>>([]);
  React.useEffect((): any => {
    const fetchUserData = async () => {
      await getUserData().then((data) => setUser(data));
    };
    fetchUserData();
  }, []);

  return (
    <>
      {user.map(({ user_id, username }) => (
        <div key={user_id}>{username}</div>
      ))}
    </>
  );
}

export default App;
