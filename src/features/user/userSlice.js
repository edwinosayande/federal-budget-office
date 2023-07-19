import {createSlice} from "@reduxjs/toolkit"
import "react-toastify/dist/ReactToastify.css";

const userSlice = createSlice({
    name:"user",
    initialState: {
        currentUser: null
    },
    reducers: {
        login: (state, action) => {
         state.currentUser = action.payload

        },
        logout: (state, action) => {
            state.currentUser = null

        }

    } 
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;