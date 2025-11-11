import TodosForm from "./components/forms/todos";
import { removeTodo } from "./reducers/todos";
import { removeAssignee } from "./reducers/assignees";
import AssigneesForm from "./components/forms/assignees";
import TodosList from "./components/todos/todos-list";
import AssigneesList from "./components/assignees/assignees-list";
import { useAppSelector } from "./hooks/store/use-app-selector";
import { useAppDispatch } from "./hooks/store/use-app-dispatch";
import PostsList from "./components/posts/posts-list";
import { useDeleteItemMutation, useGetItemsQuery } from "./services/api";

export const App = () => {
  const todos = useAppSelector((state) => state.todos.items);
  const assignees = useAppSelector((state) => state.assignees.items);
  const { data: posts, isLoading: loading } = useGetItemsQuery(10);
  const [deletePost] = useDeleteItemMutation();
  const dispatch = useAppDispatch();

  const handleRemoveTodo = (uuid: string) => {
    dispatch(
      removeTodo({
        id: uuid,
      })
    );
  };

  const handleRemoveAssignee = (assigneeId: string) => {
    dispatch(
      removeAssignee({
        id: assigneeId,
      })
    );
  };

  const handleRemovePost = async (postId: number) => {
    try {
      await deletePost(postId).unwrap();
      console.log('Post deleted successfully');
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Lista de asignados
        </h1>
        <AssigneesForm />
        <AssigneesList
          assignees={assignees}
          onRemoveAssignee={handleRemoveAssignee}
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          📝 Lista de Tareas
        </h1>
        <TodosForm assignees={assignees} />
        <TodosList todos={todos} onRemoveTodo={handleRemoveTodo} />
        <h1 className="text-4xl font-bold text-gray-900 mb-8 mt-10 text-center">
          Async posts
        </h1>
        <PostsList posts={posts} onRemovePost={handleRemovePost} />
      </div>
    </div>
  );
};
