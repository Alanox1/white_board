
import AddTodo from "@/components/shared/AddTodo";
import { prisma } from "@/utils/prisma";
import Todo from "@/components/shared/Todo";
import TodoBoard from "@/components/shared/TodoBoard";
import { todo } from "node:test";
import { useState, useEffect } from "react";
import SideBar from "@/components/shared/SideBar";


async function getData() {
  
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      mensaje: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    }
  });

  return data.map((todo) => {
    // TODO: Cambiar cuando se actualize la base de datos!!!!
    return { ...todo, color: "red" };
  });
}

const Home = async () => {
  
 const data = await getData();
 
  return (
    <div className="w-full py-32 flex justify-center flex-col items-center">

      <div className="flex gap-6 justify-around w-full items-center">
        <h1 className="text-3xl sm:text-6xl p-0 m-0">NoteBoard</h1>
        {/* <AddTodo />  */}
        <SideBar />
      </div>

      <div className="flex justify-center items-center flex-col w-full p-20">
        {/* <AddTodo /> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 m-auto  mt-10 w-full">
          {data.map((todo, id) => (
            <Todo todo={todo} key={id} />
          ))}
        </div> 
      </div>
    </div>
  );
};

export default Home;
