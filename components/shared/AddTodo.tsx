import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { create } from "@/app/actions/todoActions";
import { TodoType } from "@/types/todoType";

const AddTodo = ({ changeOpen }) => {
  const handleSubmit = () => changeOpen(false);

  return (
    <Form action={create} className=" m-auto" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-10 w-[500px] items-stretch px-10">
        <h1 className="text-3xl font-bold">Write your note</h1>
        <div className="label ">
          Your title:
          <Input name="input" type="text" placeholder="Add Todo..." />
        </div>
        <div className="label ">
          Your text:
          <textarea
            className="h-32 w-full p-2 rounded-2xl border-2 border-gray-300"
            name="message"
            placeholder="Add Message..."
          />
        </div>
        {/*  Input para agregar un mensaje, anda pero sale subrayado en rojo en page.tsx y en todoActions.tsx */}
        <div className="flex justify-center gap-10 text-white text-xl">
          {" "}
          <label className="bg-sky-600 rounded-full h-10 w-10 text-sky-600">
            <Input type="radio" name="backgroundColor" value="blue" />
            Azul
          </label>
          <label>
            <Input type="radio" name="backgroundColor" value="yellow" />
            Amarillo
          </label>
          <label>
            <Input type="radio" name="backgroundColor" value="green" />
            Verde
          </label>
        </div>
        <Button type="submit" text="Add" />
      </div>
    </Form>
  );
};

export default AddTodo;
