import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type {
  PostsState,
} from "../../types";

const sliceName = "posts";

const initialState: PostsState = {
  items: [],
  loading: false,
};

const fetchPostsType = `${sliceName}/fetchPosts`;

// async thunk help us to do async operations like fetching data from an API
export const fetchPosts = createAsyncThunk(fetchPostsType, async (limit: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );
  const data = await response.json();
  return data;
});

export const postsSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    // synchronous reducers can be added here if needed
    deletePost: (state, action) => {
      const postId = action.payload;
      state.items = state.items.filter(post => post.id !== postId);
    }
  },
  extraReducers(builder) {
    // new syntax - more concise than addCase
    builder.addAsyncThunk(fetchPosts, {
      // when the result is completed
      fulfilled: (state, action) => {
        state.items = action.payload;
        state.loading = false;
      },
      // when the result is pending
      pending: (state) => {
        state.loading = true;
      },
      // when the request fails
      rejected: (state, action) => {
        state.loading = false;
        console.error('Failed to fetch posts:', action.error.message);
      },
    });

    // old syntax
    // builder
    //   .addCase(fetchPosts.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(fetchPosts.fulfilled, (state, action) => {
    //     state.items = action.payload;
    //     state.loading = false;
    //   });
  },
});

export const { deletePost } = postsSlice.actions;

export default postsSlice.reducer;
