import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userId: "",
    fname: "",
    email: "",
    accessToken: ""
};

export const userSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        setDetails: (state, action) => {
            const {userId, fname, email, accessToken } = action.payload;
            state.userId = userId !== undefined ? userId : state.userId;
            state.fname = fname !== undefined ? fname : state.fname;
            state.email = email !== undefined ? email : state.email;
            state.accessToken = accessToken !== undefined ? accessToken : state.accessToken; 
        }
    }
})

export const { setDetails } = userSlice.actions;
export default userSlice.reducer;
export const userReducer = (state) => state.persisteReducer.userReducer;