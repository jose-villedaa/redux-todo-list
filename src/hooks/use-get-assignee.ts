import { useSelector } from "react-redux";
import type { AppRootState } from "../store";

export const useAssigneeForTodo = (todoId: string) => {
  return useSelector((state: AppRootState) => {
    const todo = state.todos.items.find(t => t.id === todoId);
    if (!todo?.assigneeId) return null;

    return state.assignees.items.find(user => user.id === todo.assigneeId);
  });
};