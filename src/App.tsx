import TodosForm from './components/forms/todos';
import { useDispatch, useSelector } from 'react-redux';
import type { AppRootState } from './store';
import { removeTodo } from './reducers/todos';
import TodosCard from './components/todos/todos-card';

export const App = () => {
  const items = useSelector((state: AppRootState) => state.todos.items);
  const dispatch = useDispatch();
  const handleRemoveTodo = (uuid: string) => {
    dispatch(removeTodo({
      id: uuid
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          📝 Lista de Tareas
        </h1>
        <TodosForm />

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {items.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No hay tareas. ¡Agrega una nueva para comenzar!
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {items.map((todo) => (
                <li
                  key={todo.id}
                  className="p-4 hover:bg-gray-50 transition-colors"
                >
                  <TodosCard todo={todo} onRemove={handleRemoveTodo} />
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="mt-4 text-center text-gray-600">
            Total de tareas: {items.length}
          </div>
        )}
      </div>
    </div>
  );
}