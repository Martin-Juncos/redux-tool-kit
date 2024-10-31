import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    getPosts: (state, action) => {
      return action.payload;
    },
    createPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { getPosts, createPost } = postsSlice.actions;

export default postsSlice.reducer;
