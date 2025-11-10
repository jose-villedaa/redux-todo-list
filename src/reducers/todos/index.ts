import { createSlice } from "@reduxjs/toolkit";
import type { AddTodoPayload, DeleteTodoPayload, TodosState, UpdateTodoStatusPayload } from "../../types";

const sliceName = 'todos';

const initialState: TodosState = {
    items: [],
};

export const todosSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        addTodo: (state, action: AddTodoPayload) => {
            // add the new todo to the items array
            state.items.push(action.payload);
        },
        removeTodo: (state, action: DeleteTodoPayload) => {
            // filter out the todo with the given id
            state.items = state.items.filter(todo => todo.id !== action.payload.id);
        },
        updateTodoStatus: (state, action: UpdateTodoStatusPayload) => {
            const { id, status } = action.payload;
            const todo = state.items.find(todo => todo.id === id);
            if (todo) {
                // set the new status
                todo.status = status;
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodoStatus } = todosSlice.actions;

export default todosSlice.reducer;