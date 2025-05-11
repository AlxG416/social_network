import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IPost } from "../../types/types";

export interface PostsState {
    posts: IPost[];
};

var initialState: PostsState = {
    posts: []
};

export var postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        storeFillPosts: (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload;
        },
        storeCreatePost: (state, action: PayloadAction<IPost>) => {
            state.posts = [...state.posts, action.payload];
        },
        storeDeletePost: (state, action: PayloadAction<IPost>) => {
            state.posts = state.posts.filter(post => post.id !== action.payload.id);
        },
        storeChangePost: (state, action: PayloadAction<IPost>) => {
            state.posts = state.posts.map(post => {
                if(post.id !== action.payload.id) {
                    return post;
                } else {
                    return action.payload;
                }
            });
        }
    }
});

export var { storeFillPosts, storeCreatePost, storeDeletePost, storeChangePost } = postsSlice.actions;

export default postsSlice.reducer;
