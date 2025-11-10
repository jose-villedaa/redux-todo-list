import type { PayloadAction } from "@reduxjs/toolkit";

// core types
export type TodoStatus = 'pending' | 'completed' | 'in-progress' | 'cancelled';

export interface Todo {
    id: string;
    text: string;
    status: TodoStatus;
}

// state types
export interface TodosState {
    items: Todo[];
}


// payload type 
export type AddTodoPayload = PayloadAction<Todo>;
export type DeleteTodoPayload = PayloadAction<{ id: string }>
export type UpdateTodoStatusPayload = PayloadAction<{ id: string; status: TodoStatus }>;