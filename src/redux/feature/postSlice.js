import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPostsThunk = createAsyncThunk(
  "posts/getPostsThunk",
  async () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json()
    );
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
  },
  extraReducers: {
    [getPostsThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getPostsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.paylod;
    },
    [getPostsThunk.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default postsSlice.reducer;
