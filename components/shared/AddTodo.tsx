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
        <h1 className="text-3xl text-neutral-800 font-bold">Write your note</h1>
        <div className="label text-xl text-neutral-800">
          Your title:
          <Input name="input" type="text" placeholder="Add Todo..." />
        </div>
        <div className="label text-xl text-neutral-800">
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
          <div className="flex justify-center gap-10 m-7">
            <label>
              <span className="inline-block  h-10 w-10 rounded-full bg-blue-500">
                <Input type="radio" name="backgroundColor" value="blue" />
              </span>{" "}
            </label>
            <label>
              {" "}
              <span className="inline-block h-10 w-10 rounded-full bg-yellow-500">
                <Input type="radio" name="backgroundColor" value="yellow" />
              </span>{" "}
            </label>
            <label>
              <span className="inline-block  h-10 w-10 rounded-full bg-green-500">
                <Input type="radio" name="backgroundColor" value="green" />
              </span>{" "}
            </label>
          </div>
        </div>
        <Button type="submit" text="Add" variant="save" />
      </div>
    </Form>
  );
};

export default AddTodo;
