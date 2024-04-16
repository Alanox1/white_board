import ChangeTodo from "./ChangeTodo";
import { todoType } from "@/types/todoType";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
const TodoBoard = ({ todo }: { todo: todoType }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };
  return (
    <div className="p-6 bg-white" style={todoStyle}>
      {/* <div
      className="w-full flex flex-col p-6  bg-white  gap-20 "
      style={todoStyle}
    > */}
      <div className="flex justify-center">
        <ChangeTodo todo={todo} />
      </div>
      <span className="text-center ">
        <h1 className="font-bold uppercase">{todo.title}</h1>
        In publishing and graphic design
      </span>
      <div className="flex justify-end gap-5">
        <EditTodo todo={todo} />
      </div>
    </div>
  );
};

export default TodoBoard;
