import type { Assignee, Todo } from "../../types";
import TodosCard from "./todos-card";

type Props = {
  todos: Todo[];
  onRemoveTodo: (id: string) => void;
  assignee?: Assignee;
};

const TodosList = ({ todos, onRemoveTodo }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {todos.length === 0 ? (
        <div className="p-8 text-center text-gray-500">
          No hay tareas. ¡Agrega una nueva para comenzar!
        </div>
      ) : (
        <ul className="divide-y divide-gray-200">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="p-4 hover:bg-gray-50 transition-colors"
            >
              <TodosCard todo={todo} onRemove={onRemoveTodo} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodosList;
