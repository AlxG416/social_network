import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IPerson } from "../../types/types";

export interface UserState {
    user: IPerson | null;
};

var initialState: UserState = {
    user: null
};

export var userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        storeFillUser: (state, action: PayloadAction<IPerson>) => {
            state.user = action.payload;
        }
    }
});

export var { storeFillUser } = userSlice.actions;

export default userSlice.reducer;
