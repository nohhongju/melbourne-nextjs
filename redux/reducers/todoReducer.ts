import { createSlice } from "@reduxjs/toolkit";

export interface TaskType{
    userid: string;
    task: string;
    completed: string;  // value is T or F
}
