import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    photo: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLogInInfo: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        setUserLogOut: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    }
});

//actions creators are generated for each case reduer functions:
export const { setUserLogInInfo, setUserLogOut } = userSlice.actions;

//selectors that i export for components i need:
export const selectUserName = (state) => state.user.name; 
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;