import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/user/userSlice";
import postsReducer from "../features/posts/postsSlice";
import peopleReducer from "../features/people/peopleSlice";

export var store = configureStore({
    reducer: {
        user: userReducer,
        posts: postsReducer,
        people: peopleReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
