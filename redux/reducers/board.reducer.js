import { createSlice } from "@reduxjs/toolkit";

const initialState = {}
export const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers:{
        addTask: (state, action) => {
            alert('리듀서 내부로 들어온 글 제목'+action.payload.task)
            const board = {id: new Date(), task: action.payload.task, completed: false}
            state.push(board)
        }
    }
})
export const { addTask } = boardSlice.actions
export default boardSlice.reducer