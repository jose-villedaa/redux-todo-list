import type { Todo } from "../../types";
import { mappedStatusColor, mappedStatusText } from "../../utils/todos";

interface TodosCardProps {
  todo: Todo;
  onRemove: (id: string) => void;
  onStateChange?: (id: string, status: string) => void;
}


const TodosCard = ({ todo, onRemove, onStateChange }: TodosCardProps) => {
  const statusColor = mappedStatusColor[todo.status]
  const statusText = mappedStatusText[todo.status]
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex-1">
        <p className="text-gray-900 font-medium mb-2">{todo.text}</p>
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}
        >
          {statusText}
        </span>
      </div>
      <button
        onClick={() => onRemove(todo.id)}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
      >
        Eliminar
      </button>
      <button
        onClick={() => onStateChange?.(todo.id, todo.status)}
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
      >
        Editar estado
      </button>
    </div>
  );
};

export default TodosCard;
