import { Link } from "react-router-dom";

function User(props) {
  // eslint-disable-next-line react/prop-types
  const { id, name, role, email } = props;
  return (
    <div className="user">
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{email}</p>
      <Link to={`/post-form/${id}`}>
        <button>Crear post</button>
      </Link>
    </div>
  );
}

export default User;
