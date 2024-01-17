import { FaCheck, FaTimes, FaToggleOn, FaToggleOff } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  markCompleted,
  markIncompleted,
  removeTodo,
  toggleTodo,
} from "../redux/actions";

export const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b py-2 gap-4 mt-4">
      <div className="flex items-center">
        <span className="mr-4 text-white">{index + 1}.</span>
        <span
          className={`mr-4 text-gray-100 ${
            todo.completed ? "line-through text-red-800" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="space-x-3 ml-8">
        <button
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        {!todo.completed ? (
          <button
            onClick={() => dispatch(markCompleted(index))}
            className="mr-2 text-sm bg-green-500 text-white sm:px-2 py-1 px-1 rounded"
          >
            <FaCheck />
          </button>
        ) : (
          <button
            onClick={() => dispatch(removeTodo(index))}
            className="mr-2 text-sm bg-red-500 text-white sm:px-2 py-1 px-1 rounded"
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};
