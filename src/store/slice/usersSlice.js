import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
    },
    reducers: {
        addUsers(state, users) {
            state.users = users.payload;
        }
    },
});

export const usersReducers = userSlice.reducer;
export const usersAcrions = userSlice.actions;
