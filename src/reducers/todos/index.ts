import { createSlice } from "@reduxjs/toolkit";
import type { AddTodoPayload, DeleteTodoPayload, TodosState, UpdateTodoStatusPayload } from "../../types";
import { removeAssignee } from "../assignees";

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
            state.items.unshift(action.payload);
        },
        removeTodo: (state, action: DeleteTodoPayload) => {
            const index = state.items.findIndex(todo => todo.id === action.payload.id);
            // remove the todo if found
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },
        updateTodoStatus: (state, action: UpdateTodoStatusPayload) => {
            const { id, status } = action.payload;
            const todo = state.items.find(todo => todo.id === id);
            if (todo) {
                // set the new status
                todo.status = status;
            }
        }
    },
    extraReducers(builder) {
        // after deleting an assignee, remove all todos assigned to that person
        builder.addCase(removeAssignee, (state, action) => {
            const assigneeId = action.payload.id;
            for(const task of state.items) {
                if (task.assigneeId === assigneeId) {
                    task.assigneeId = '';
                }
            }
        });
    },
})

export const { addTodo, removeTodo, updateTodoStatus } = todosSlice.actions;

export default todosSlice.reducer;