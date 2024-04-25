import AddTodo from "@/components/shared/AddTodo";
import { prisma } from "@/utils/prisma";
import Todo from "@/components/shared/Todo";
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
      backgroundColor: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data.map((todo) => {
    return { ...todo };
  });
}

const Home = async () => {
  const data = await getData();

  return (
    <div className="py-32 flex justify-center flex-col bg-background gap-12 items-center">
      <div className="flex justify-evenly w-full items-center">
        <h1 className="text-3xl sm:text-9xl font-serif text-black/80 p-0 m-0">
          NoteBoard
        </h1>
        {/* <AddTodo />  */}
        <SideBar />
      </div>
      <div
        className="bg-opacity-60 border-[16px] border-accent/90"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/wood-board-background_1339-5418.jpg?t=st=1714152936~exp=1714156536~hmac=09b0e4513c9138adec1d738f0d8cd3a2aa2fdae9986b382e3a62648772f21918&w=1380)",
        }}
      >
        <div className="flex justify-center items-center flex-col w-full p-20">
          {/* <AddTodo /> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 m-auto  mt-10 w-full">
            {data.map((todo) => (
              <Todo todo={todo} key={todo.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
