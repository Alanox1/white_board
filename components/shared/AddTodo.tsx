import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { create } from "@/app/actions/todoActions";

const AddTodo = ({changeOpen}) => {

  const handleSubmit = () => changeOpen(false)
  
  return (
    <Form action={create} className="w-1/2 m-auto" onSubmit={handleSubmit}>
       <div className="flex flex-col gap-4 ">
        <Input name="input" type="text" placeholder="Add Todo..." />
        

        <Input name="message" type="text" placeholder="Add Message..."/>  {/*  Input para agregar un mensaje, todavia no anda */}


        <Button type="submit" text="Add"  />
      </div>
    </Form>
  );
};

export default AddTodo;
