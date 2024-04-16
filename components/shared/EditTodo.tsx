"use client";
import { edit } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState } from "react";
import { todoType } from "@/types/todoType";
import { BiEdit } from "react-icons/bi";
import DeleteTodo from "./DeleteTodo";

const EditTodo = ({ todo }: { todo: todoType }) => {
  const [EditTodo, setEditTodo] = useState(false);
  const hadleEdit = () => {
    if (todo.isCompleted === true) {
      return;
    }
    setEditTodo(!EditTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };
  return (
    <div className=" flex gap-5 items-center">
      <Button onClick={hadleEdit} text={<BiEdit />} actionButton />

      {EditTodo ? (
        <Form action={edit} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden" />
          <div className="flex justify-center">
            <Input type="text" name="newTitle" placeholder="EditTodo..." />
            <Button type="submit" text="Save" />
          </div>
          <DeleteTodo todo={todo} />
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
