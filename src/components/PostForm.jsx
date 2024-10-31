import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { createPost } from "../redux/postsSlice";
import axios from "axios";

function PostForm() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });
  const handleInput = (e) => {
    const propiedad = e.target.name;
    const valor = e.target.value;
    setInputs({
      ...inputs,
      [propiedad]: valor,
    });
  };

  const handlerClick = (e) => {
    e.preventDefault();
    if (inputs) {
      const newPost = {
        title: inputs.title,
        body: inputs.body,
        userId: id,
      };
      dispatch(createPost(newPost));
      axios
        .post("http://localhost:3001/api/posts", newPost)
        .then(() =>
          setInputs({
            title: "",
            body: "",
          })
        )
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div>
      <Link to="/">Volver</Link>
      <h2>postForm</h2>
      <form>
        <input
          name="title"
          value={inputs.title}
          onChange={handleInput}
          type="text"
          placeholder="Titulo"
        />
        <input
          name="body"
          value={inputs.body}
          onChange={handleInput}
          type="text"
          placeholder="Body"
        />
        <div>
          <button onClick={handlerClick}>Crear Post</button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
