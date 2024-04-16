// import ChangeTodo from "./ChangeTodo";
// import { todoType } from "@/types/todoType";
// import { prisma } from "@/utils/prisma";
// import EditTodo from "./EditTodo";
// import DeleteTodo from "./DeleteTodo";
// import Todo from "./Todo";

// async function getData() {
//   const data = await prisma.todo.findMany({
//     select: {
//       title: true,
//       id: true,
//       isCompleted: true,
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });

//   return data;
// }

// const TodoBoard = async () => {
//   const data = await getData();
//   <div className="flex flex-col-4 gap-10 items-center justify-center mt-10 w-full">
//     {data.map((todo, id) => (
//       <div className="w-full" key={id}>
//         <Todo todo={todo} />
//       </div>
//     ))}
//   </div>;
// };

// export default TodoBoard;
