"use client";
import ChangeTodo from "./ChangeTodo";
import { TodoType } from "@/types/todoType";
import EditTodo from "./EditTodo";
import { useState } from "react";
const Todo = ({ todo }: { todo: TodoType }) => {

  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
    backgroundColor : todo.backgroundColor || "white"
  };

  
  return (
    <div className="flex flex-col items-center" style={todoStyle}>
      <div
        className="p-6 bg-white min-w-80 w-80 h-80 flex flex-col justify-around "
        style={todoStyle}
      >
        <div
          className="m-auto h-6 w-6 rounded-full"
          style={{ backgroundColor: todo.color || "" }}
        ></div>
        <span className="text-center ">
          <h1 className="font-bold uppercase text-2xl">{todo.title}</h1>
          <p>{todo.mensaje}</p>
          {/* <p className="">In publishing and graphic design{todo.messaje}</p> */}
        </span>
        <div className="flex justify-end gap-5 text-xl mt-10">
          <EditTodo todo={todo} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
