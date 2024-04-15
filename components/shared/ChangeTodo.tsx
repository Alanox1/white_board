import Form from "../ui/Form";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { changeStatus } from "@/app/actions/todoActions";

const ChangeTodo = ({ todo }) => {
  return (
    <Form action={changeStatus}>
      <Input name="inputId" value={todo.id} type="hidden" />
      <Button actionButton type="submit" text={<AiOutlineCheckCircle />} />
    </Form>
  );
};

export default ChangeTodo;
