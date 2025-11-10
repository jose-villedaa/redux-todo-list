import type { Assignee } from "../../types";

interface AssigneesCardProps {
  assignee: Assignee;
  onRemove: (id: string) => void;
}

const AssigneesCard = ({ assignee, onRemove }: AssigneesCardProps) => {
  const { id, name } = assignee;
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex-1">
        <p className="text-gray-900 font-medium mb-2">{name}</p>
      </div>
      <button
        onClick={() => onRemove(id)}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
      >
        Eliminar
      </button>
    </div>
  );
};

export default AssigneesCard;
