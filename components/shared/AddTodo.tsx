import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { create } from "@/app/actions/todoActions";

const AddTodo = ({changeOpen}) => {

  const handleSubmit = () => changeOpen(false)
  
  return (
    <Form action={create} className="w-1/2 m-auto" onSubmit={handleSubmit}>
       <div className="flex flex-col gap-4 "> {/*Le puse flex-col para que queden uno debajo del otro */}
        <Input name="input" type="text" placeholder="Add Todo..." />
        <Button type="submit" text="Add"  /> {/*Le puse onChange = false para que cierre */}
      </div>
    </Form>
  );
};

export default AddTodo;
