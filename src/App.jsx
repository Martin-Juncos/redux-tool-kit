import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Users from "./components/Users";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post-form/:id" element={<PostForm />} />
      </Routes>
    </>
  );
}

export default App;
