import { useAppSelector } from "./store/use-app-selector";

export const useAssigneeForTodo = (todoId: string) => {
  return useAppSelector((state) => {
    const todo = state.todos.items.find(t => t.id === todoId);
    if (!todo?.assigneeId) return null;

    return state.assignees.items.find(user => user.id === todo.assigneeId);
  });
};