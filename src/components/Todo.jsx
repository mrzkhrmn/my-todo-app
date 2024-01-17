import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import { FilterButton } from "./FilterButton";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  function handleAddTodo(text) {
    dispatch(addTodo(text));
  }

  function handleAddTodoClick() {
    if (todoText.trim() !== "") {
      handleAddTodo(todoText.trim());
      setTodoText("");
    }
  }
  return (
    <div className="max-w-2xl mx-auto p-4 sm:mt-8 bg-gradient-to-r from-red-400  to-pink-500 rounded">
      <h1 className="text-white text-center text-3xl font-thin mt-3 mb-6">
        Personal Todo App
      </h1>
      <div className="flex justify-center px-4 mb-6">
        <input
          type="text"
          id="addTodo"
          name="addTodo"
          placeholder="What to do..?"
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
          className="text-white font-light placeholder:font-thin flex-grow bg-white/5 focus:bg-white/10 border border-black/50 border-r-0 placeholder:text-white focus:text-white focus:outline-none px-4 py-2"
        />
        <button
          onClick={handleAddTodoClick}
          className="bg-gradient-to-r from-green-500  to-emerald-500 text-white px-4 py-2 border border-black/50 border-l-0 font-thin text-xl"
        >
          Add
        </button>
      </div>
      <div className="px-4">
        <FilterButton />
        <TodoList />
      </div>
    </div>
  );
};
