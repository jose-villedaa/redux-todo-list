import type { PayloadAction } from "@reduxjs/toolkit";

// core types
export type TodoStatus = "pending" | "completed" | "in-progress" | "cancelled";

export interface Todo {
  id: string;
  text: string;
  status: TodoStatus;
  assigneeId: string;
}

export interface Assignee {
  id: string;
  name: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// state types
export interface TodosState {
  items: Todo[];
}

export interface AssigneesState {
  items: Assignee[];
}

export interface PostsState {
  items: Post[];
  loading: boolean;
}

// payload type
export type AddTodoPayload = PayloadAction<Todo & { assigneeId: string }>;
export type DeleteTodoPayload = PayloadAction<{ id: string }>;
export type UpdateTodoStatusPayload = PayloadAction<{
  id: string;
  status: TodoStatus;
}>;

export type AddAssigneePayload = PayloadAction<Assignee>;
export type DeleteAssigneePayload = PayloadAction<{ id: string }>;
export type GetAssigneePayload = PayloadAction<{ id: string }>;
