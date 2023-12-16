import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name : "app",
    initialState : {
        isMenuOpen : true,
    },
    reducers : {
        toggleMenu : (state) => {
            state.isMenuOpen = !
        }
    }
})