import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    _id: "",
    fname: "",
    email: "",
    field: "",
    accessToken: ""
};



export const userSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        setDetails: (state, action) => {
            console.log(action.payload, "action");
            const {_id, fname, email, field, accessToken } = action.payload;
            state._id = _id !== undefined ? _id : state._id;
            state.fname = fname !== undefined ? fname : state.fname;
            state.email = email !== undefined ? email : state.email;
            state.field = field !== undefined ? field : state.field;
            state.accessToken = accessToken !== undefined ? accessToken : state.accessToken; 
        },

        reSetDetails: (state, action) =>{
            state._id = "",
            state.fname = "",
            state.email = "",
            state.field = "",
            state.accessToken = ""
        }
    }
})

export const { setDetails, reSetDetails } = userSlice.actions;
export default userSlice.reducer;
export const userReducer = (state) => state.persisteReducer.userReducer;