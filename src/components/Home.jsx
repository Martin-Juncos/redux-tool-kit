import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h2>Home</h2>
      <Link to="/users">
        <button>Users</button>
      </Link>

      <Link to="/posts">
        <button>Post</button>
      </Link>
    </>
  );
}

export default Home;
