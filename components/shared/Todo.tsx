const Todo = ({todo}) => {
  return (
    <div className="w-full flex items-center justify-between bg-white py-3 px-20 rounded-2xl ">
        <span className="text-center font-bold uppercase">{todo.title}</span>
    </div>
  )
}

export default Todo