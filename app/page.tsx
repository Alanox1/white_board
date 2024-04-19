import AddTodo from "@/components/shared/AddTodo";
import { prisma } from "@/utils/prisma";
import Todo from "@/components/shared/Todo";
import TodoBoard from "@/components/shared/TodoBoard";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}
const Home = async () => {
  const data = await getData();
  return (
    <div className="w-full py-32 flex justify-center flex-col items-center">
      {/* <span className="text-3xl font-extrabold uppercase">To-do-app</span>
      <h1 className="text-3xl font-extrabold uppercase mb-5">
        Next.js 14 <span className="text-orange-700 ml-2">Server Actions</span>
      </h1> */}


      <div className="flex gap-6">
          <h1 className="text-6xl p-0 m-0">WhiteBoard</h1>
          <AddTodo />
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
