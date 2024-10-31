import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersSlice";
import postReducer from "./postsSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    posts: postReducer,
  },
});

export default store;
