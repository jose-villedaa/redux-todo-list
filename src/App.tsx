import TodosForm from './components/forms/todos';
import { useDispatch, useSelector } from 'react-redux';
import type { AppRootState } from './store';
import { removeTodo } from './reducers/todos';
import { removeAssignee } from './reducers/assignees';
import AssigneesForm from './components/forms/assignees';
import TodosList from './components/todos/todos-list';
import AssigneesList from './components/assignees/assignees-list';

export const App = () => {
  const todos = useSelector((state: AppRootState) => state.todos.items);
  const assignees = useSelector((state: AppRootState) => state.assignees.items);
  const dispatch = useDispatch();

  const handleRemoveTodo = (uuid: string) => {
    dispatch(removeTodo({
      id: uuid
    }))
  };

  const handleRemoveAssignee = (assigneeId: string) => {
    dispatch(removeAssignee({
      id: assigneeId
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Lista de asignados
        </h1>
        <AssigneesForm />
        <AssigneesList assignees={assignees} onRemoveAssignee={handleRemoveAssignee} />
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          📝 Lista de Tareas
        </h1>
        <TodosForm assignees={assignees}  />
        <TodosList todos={todos} onRemoveTodo={handleRemoveTodo}/>
      </div>
    </div>
  );
}