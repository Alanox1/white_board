"use client";
import ChangeTodo from "./ChangeTodo";
import { TodoType } from "@/types/todoType";
import EditTodo from "./EditTodo";
import { useState } from "react";
const Todo = ({ todo }: { todo: TodoType }) => {
  const todoStyle = {
    backgroundColor: "background",
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="p-6 flex flex-col justify-around shadow-2xl min-w-80 w-80 h-80 "
        style={todoStyle}
      >
        <div
          className="m-auto h-8 w-8 rounded-full shadow-2xl shadow-black"
          style={{
            backgroundColor: todo.backgroundColor || "red",
            display: "inline-block",
          }}
        ></div>
        <span className="text-center">
          <h1 className="font-bold uppercase text-2xl">{todo.title}</h1>
          <p>{todo.mensaje}</p>
        </span>
        <div className="flex justify-end gap-5 text-xl mt-10">
          <EditTodo todo={todo} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
