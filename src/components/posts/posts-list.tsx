import type { Post } from "../../types";

type Props = {
  posts?: Post[];
  onRemovePost: (id: number) => void;
};

const PostsList = ({ posts, onRemovePost }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {posts?.length === 0 ? (
        <div className="p-8 text-center text-gray-500">
          No hay tareas. ¡Agrega una nueva para comenzar!
        </div>
      ) : (
        <ul className="divide-y divide-gray-200">
          {posts?.map((post) => (
            <li
              key={post.id}
              className="p-4 hover:bg-gray-50 transition-colors"
            >
                <p>{post.title}</p>
                <button
                  onClick={() => onRemovePost(post.id)}
                  className="text-red-500 hover:text-red-700 mt-0.5"
                >
                  Eliminar
                </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostsList;
