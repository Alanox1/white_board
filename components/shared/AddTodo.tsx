import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { create } from "@/app/actions/todoActions";
import { TodoType } from "@/types/todoType";

const AddTodo = ({ changeOpen }) => {
  const handleSubmit = () => changeOpen(false);

  return (
    <Form action={create} className="w-1/2 m-auto" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 ">
        <Input name="input" type="text" placeholder="Add Todo..." />
        <Input name="message" type="text" placeholder="Add Message..." />{" "}
        {/*  Input para agregar un mensaje, anda pero sale subrayado en rojo en page.tsx y en todoActions.tsx */}
        <div className="flex justify-center gap-10 text-white text-xl">
          {" "}
          <label>
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
