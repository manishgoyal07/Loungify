import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isUserLoggedIn: false,
        currentUser : {},
    },
    reducers: {
        userLogin : (state, action)=>{
            console.log(action.payload);
            state.isUserLoggedIn = true;
            state.currentUser = action.payload
        },
        userLogout : (state)=>{
            state.isUserLoggedIn = false;
            state.currentUser = {}
        }
    }
});

export default userSlice.reducer;
export const {userLogin, userLogout} = userSlice.actions