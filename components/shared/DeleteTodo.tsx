"use client";

import { deleteTodo } from "@/app/actions/todoActions";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { TodoType } from "@/types/todoType";
import { BsFillTrashFill } from "react-icons/bs";

const DeleteTodo = ({ todo, onDelete }: { todo: TodoType }) => {
  return (
    <Form
      action={deleteTodo}
      className="w-full m-auto"
      onSubmit={() => onDelete()}
    >
      <Input type="hidden" name="inputId" value={todo.id} />

      <Button actionButton text={"Delete"} type="submit" />
    </Form>
  );
};

export default DeleteTodo;
