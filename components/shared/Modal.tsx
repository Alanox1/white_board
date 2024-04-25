"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import Form from "../ui/Form";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { edit } from "@/app/actions/todoActions";
import { TodoType } from "@/types/todoType";
import ColorSelector from "./ColorSelector";

// Establecemos la aplicación Modal en el elemento #root del DOM.
Modal.setAppElement("body");

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  todo: TodoType;
};

const CustomModal: React.FC<ModalProps> = ({ isOpen, closeModal, todo }) => {
  const [modalTitle, setModalTitle] = useState(todo.title || "");
  const [modalMessage, setModalMessage] = useState(todo.mensaje || "");
  const [editTodo, setEditTodo] = useState(false);
  const hadleEdit = () => {
    if (todo.isCompleted === true) {
      return;
    }
    setEditTodo(!editTodo);
  };

  const handleSubmit = (e) => {
    setEditTodo(false);
    closeModal(); //Agregue este closeModal para que al editar al apretar save se vaya el modal
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModalTitle(e.target.value);
  };

  const handleSave = () => {
    // Aquí podrías procesar o guardar el texto del modal.
    // console.log("Texto guardado:", modalText);
    closeModal(); // Cerrar el modal después de guardar.
  };

  return (
    <Modal
      style={{
        content: {
          backgroundColor: "#fefefe",
          width: "50%",
          height: "auto",
          top: "15%",
          left: "25%",
          bottom: "auto",
          rigth: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        },
      }}
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Ejemplo de Modal"
    >
      <div className="flex ">
        <DeleteTodo todo={todo} onDelete={closeModal} />{" "}
        {/* Este botón antes estaba más arriba */}
      </div>
      <h2 className="text-3xl text-center font m-10">Note Editor</h2>
      <Form action={edit} onSubmit={handleSubmit}>
        <Input name="inputId" value={todo.id} type="hidden" />

        <div className="flex flex-col justify-center gap-6 ">
          <div className="label ">
            <Input
              onChange={(e) => setModalTitle(e.target.value)}
              value={modalTitle}
              type="text"
              name="newTitle"
              placeholder="EditTodo..."
            />
          </div>
          <div className="label ">
            <textarea
              onChange={(e) => setModalMessage(e.target.value)}
              className="h-32 w-full p-2 rounded-2xl border-2 border-gray-300"
              value={modalMessage}
              name="messageEdit"
              placeholder="Edit Message..."
            />
          </div>

          <div className="flex justify-center gap-10 m-7">
            {/* <label>
              <span className="inline-block h-10 w-10 rounded-full bg-blue-500 ">
                <Input
                  type="radio"
                  name="backgroundColor"
                  value="blue"
                  className="opacity-0 absolute"
                />
              </span>{" "}
            </label>
            <label>
              <span className="inline-block h-10 w-10 rounded-full bg-yellow-500">
                <Input
                  type="radio"
                  name="backgroundColor"
                  value="yellow"
                  className="opacity-0 absolute"
                />
              </span>{" "}
            </label>
            <label>
              <span className="inline-block h-10 w-10 rounded-full bg-green-500 ">
                <Input
                  type="radio"
                  name="backgroundColor"
                  value="green"
                  className="opacity-0 absolute"
                />
              </span>{" "}
            </label> */}
            <ColorSelector initialColor={todo.backgroundColor} />
          </div>

          <Button type="submit" text="Save" variant="save" />
        </div>
      </Form>
    </Modal>
  );
};

export default CustomModal;
