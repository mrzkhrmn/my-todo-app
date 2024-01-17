import { useDispatch, useSelector } from "react-redux";
import {
  filterTodos,
  markAllCompleted,
  updateSearchTerm,
} from "../redux/actions";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export const FilterButton = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);
  const [searchTerm, setSearchTerm] = useState("");

  function handleFilter(filter) {
    dispatch(filterTodos(filter));
  }

  function handleSearchChange(value) {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  }
  return (
    <div className="flex justify-between">
      <div className="flex space-x-4 items-center">
        <select
          className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
          value={currentFilter}
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="ALL">Default</option>
          <option value="COMPLETED">Completed</option>
          <option value="INCOMPLETE">Incomplete</option>
        </select>
        <button
          onClick={() => dispatch(markAllCompleted())}
          className="bg-purple-500 text-sm text-white px-4 py-2 rounded hover:bg-purple-600"
        >
          Mark all Complete
        </button>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="px-4  h-full focus:outline-none"
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-3 h-full">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};
