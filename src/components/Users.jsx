import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/usersSlice";
import User from "./User";
import { Link } from "react-router-dom";

function Users() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users")
      .then((res) => {
        dispatch(getUser(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [dispatch]);
  return (
    <div>
      <Link to="/">Volver</Link>
      <h2>Users</h2>
      {users.map((user) => (
        <User
          key={user._id}
          id={user._id}
          name={user.name}
          role={user.role}
          email={user.email}
        />
      ))}
    </div>
  );
}

export default Users;
