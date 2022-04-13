import { createSlice } from "@reduxjs/toolkit";

const initialState = [

]
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
            alert('리듀서 내부로 들어온 할 일은?'+action.payload.task)
            const todo = {id: new Date(), task: action.payload.task, completed: false}
            state.push(todo)
        }
    }
})
export const { addTask } = todoSlice.actions
export default todoSlice.reducer