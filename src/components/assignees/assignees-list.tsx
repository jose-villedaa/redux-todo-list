import type { Assignee } from "../../types";
import AssigneesCard from "./assignees-card";

type Props = {
  assignees: Assignee[];
  onRemoveAssignee: (id: string) => void;
};

const AssigneesList = ({ assignees, onRemoveAssignee }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
      {assignees.length === 0 ? (
        <div className="p-8 text-center text-gray-500">
          No hay asignados. ¡Agrega un nuevo asignado para comenzar!
        </div>
      ) : (
        <ul className="divide-y divide-gray-200">
          {assignees.map((assignee) => (
            <li
              key={assignee.id}
              className="p-4 hover:bg-gray-50 transition-colors"
            >
              <AssigneesCard assignee={assignee} onRemove={onRemoveAssignee} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AssigneesList;
