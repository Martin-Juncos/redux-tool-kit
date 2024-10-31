import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../redux/postsSlice";

function Posts() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/posts")
      .then((res) => dispatch(getPosts(res.data)))
      .catch((err) => console.error(err));
  }, [dispatch]);
  return (
    <div>
      <Link to="/">Volver</Link>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div className="post" key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
