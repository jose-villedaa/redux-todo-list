import { useState, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addAssignee } from "../../reducers/assignees";

const AssigneesForm = () => {
  const [name, setName] = useState<string>("");
  // we use dispatch to trigger the reducer.
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      addAssignee({
        id: crypto.randomUUID(),
        name
      })
    );
    // after we update the state, clean the input
    setName('')
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Agrega un nuevo usuario..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Agregar
        </button>
      </div>
    </form>
  );
};

export default AssigneesForm;
