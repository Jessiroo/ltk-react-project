import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todo: [], //array of objects with text: "" and id:
  },
  reducers: {
    addToDo (state, action) {
      state.todo.push(action.payload);
    },
    removeToDo (state, action) {
      const index = state.todo.findIndex(obj => obj.id === action.payload);
      state.todo.splice(index, 1);
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;