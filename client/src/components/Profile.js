import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile({ setAuth }) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    axios
      .get("/api/profile")
      .then(res => setUserInfo(res.data))
      .catch(err => console.log(err));
  }, []);

  const logOut = () => {
    setAuth(false);
  };

  return (
    <div>
      <h1>Profile page</h1>
      {userInfo ? <h2>Welcome {userInfo.email}</h2> : null}
      <button onClick={logOut}>Log out</button>
    </div>
  );
}

export default Profile;
