import TodosForm from './components/forms/todos';
import { useDispatch } from 'react-redux';
import { removeTodo } from './reducers/todos';
import { removeAssignee } from './reducers/assignees';
import AssigneesForm from './components/forms/assignees';
import TodosList from './components/todos/todos-list';
import AssigneesList from './components/assignees/assignees-list';
import { useAppSelector } from './hooks/store/use-app-selector';

export const App = () => {
  const todos = useAppSelector(state => state.todos.items);
  const assignees = useAppSelector(state => state.assignees.items);
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