"use client";

import { edit } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState } from "react";
import { todoType } from "@/types/todoType";
import { BiEdit } from "react-icons/bi";
import DeleteTodo from "./DeleteTodo";
import CustomModal from "./Modal";

const EditTodo = ({ todo }: { todo: todoType }) => {
  const [editTodo, setEditTodo] = useState(false);
  const hadleEdit = () => {
    if (todo.isCompleted === true) {
      return;
    }
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };
  return (
    <div className="flex gap-5 items-center">
      <Button onClick={hadleEdit} text={<BiEdit />} actionButton />
      <CustomModal isOpen={editTodo} closeModal={handleSubmit} todo={todo}  />
      {/* {editTodo ? (
        <Form action={edit} onSubmit={handleSubmit}>
           
          <Input name="inputId" value={todo.id} type="hidden" />
          <div className="flex justify-center">
            <Input type="text" name="newTitle" placeholder="EditTodo..." />
            <Button type="submit" text="Save" />
          </div>
          <DeleteTodo todo={todo} />
        </Form>
      ) : null} */}
    </div>
  );
};

export default EditTodo;
