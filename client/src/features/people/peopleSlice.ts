import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IPerson } from "../../types/types";

export interface PeopleState {
    people: IPerson[];
};

var initialState: PeopleState = {
    people: []
};

export var peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        storeFillPeople: (state, action: PayloadAction<IPerson[]>) => {
            state.people = action.payload;
        }
    }
});

export var { storeFillPeople } = peopleSlice.actions;

export default peopleSlice.reducer;
