import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setusers] = useState({ collection: [] });
  const [Error, setError] = useState();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/users/users-list")
      .then((res) => {
        console.log(res.data);
        setusers({ collection: res.data });
        return res.data;
      })
      .catch((error) => {
        console.log({ Error: error });
        // setError(error);
        return error;
      });
  }, []);

  return (
    <div>
      {users.collection.map((element, i) => {
        return (
          <div key={i}>
            {element.Name}&nbsp;{element.Email}
            &nbsp;{element.Message}
          </div>
        );
      })}
    </div>
  );
};

export default Users;
