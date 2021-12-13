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
            state.name === null;
            state.email === null;
            state.photo === null;
        }
    }
});

export const { setUserLogInInfo, setUserLogOut } = userSlice.actions;
export default userSlice.reducer;