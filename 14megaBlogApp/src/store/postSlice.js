// postSlice.js
import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        items: [],
        isLoading: false,
    },
    reducers: {

        addPost: (state, action) => {
            state.items.push(action.payload);
        },
    },
});

export const { addPost } = postSlice.actions;

export default postSlice.reducer;