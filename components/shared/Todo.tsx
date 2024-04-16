import ChangeTodo from "./ChangeTodo";
import { todoType } from "@/types/todoType";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
const Todo = ({ todo }: { todo: todoType }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };
  return (
    <div
      className="w-full flex flex-col  items-center justify-between bg-white py-3 px-20 rounded-2xl "
      style={todoStyle}
    >
      <ChangeTodo todo={todo} />
      <span className="text-center ">
        <h1 className="font-bold uppercase">{todo.title}</h1>
        <span className=" font">In publishing and graphic design</span>
        <div className="flex justify-end gap-5">
          <EditTodo todo={todo} />
        </div>
      </span>
    </div>
  );
};

export default Todo;
