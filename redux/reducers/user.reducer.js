import { createSlice } from "@reduxjs/toolkit";

export const UserDataPayload = {
    username: String,
    password: String,
    name: String,
    telephone: String,
}

const initialState = {
    userLoading: false,
    userData: null,
    error: null
}
export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        joinRequest(state, action){state.userLoading = true, state.error = null},
        joinSuccess(state, action){state.userLoading = true, state.error = action.payload},
        joinFailure(state, action){state.userLoading = true, state.error = action.payload}
    }
})
export default userSlice.reducer