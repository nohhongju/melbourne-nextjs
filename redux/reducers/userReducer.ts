import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface JoinPayload{
    data: {
        user: {
            userid: string;
            password: string;
            email: string;
            name: string;
            phone: string;
            birth: string;
            address: string;
        }
    }
}

export interface UserState{
    userLoading: boolean;
    userData: any;
    error: any;
    token: null;
}

const initialState: UserState = {
    userLoading: false,
    userData: null,
    error: null,
    token: null
}
export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        joinRequest(state: UserState, action: PayloadAction<JoinPayload>){
            state.userLoading = true, 
            state.error = null},
        joinSuccess(state, action: PayloadAction<JoinPayload>){
            state.userLoading = false, 
            state.error = action.payload},
        joinFailure(state, action: PayloadAction<JoinPayload>){
            state.userLoading = false, 
            state.error = action.payload}
    }
})
const { reducer, actions } = userSlice
export const {
    joinRequest, joinSuccess, joinFailure
} = actions
export default reducer