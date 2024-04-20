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

// Establecemos la aplicación Modal en el elemento #root del DOM.
Modal.setAppElement("body");

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  todo: TodoType;
};

const CustomModal: React.FC<ModalProps> = ({ isOpen, closeModal, todo }) => {
  const [modalText, setModalText] = useState("");
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
    setModalText(e.target.value);
  };

  const handleSave = () => {
    // Aquí podrías procesar o guardar el texto del modal.
    console.log("Texto guardado:", modalText);
    closeModal(); // Cerrar el modal después de guardar.
  };

  return (
    <Modal
      style={{
        content: {
          backgroundColor: "#D3D3D3",
          width: "50%",
          height: "50%",
          top: "25%",
          left: "25%",
          bottom: "auto",
          rigth: "auto",
          display: "flex", //Puse un flex para poder acomodarlos y abajo como los acomode
          flexDirection: "column",
          justifyContent: "space-evenly",
        },
      }}
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Ejemplo de Modal"
    >
      <h2 className="text-5xl text-center">Editar</h2>{" "}
      <Form action={edit} onSubmit={handleSubmit}>
        <Input name="inputId" value={todo.id} type="hidden" />
        <div className="flex flex-col justify-center gap-6 ">
          <Input type="text" name="newTitle" placeholder="EditTodo..." />
          <div className="flex justify-center gap-10">
            {" "}
            <label>
              <input type="radio" name="backgroundColor" value="blue" />
              Azul
            </label>
            <label>
              <input type="radio" name="backgroundColor" value="yellow" />
              Amarillo
            </label>
            <label>
              <input type="radio" name="backgroundColor" value="yellow" />
              Green
            </label>
          </div>
          <Button type="submit" text="Save" />
        </div>

        {/* Inputs para cambiar los colores */}
      </Form>
      <div className="flex gap-5 justify-center ">
        {" "}
        <DeleteTodo todo={todo} onDelete={closeModal} />{" "}
        {/* Este botón antes estaba mas arriba */}
      </div>
    </Modal>
  );
};

export default CustomModal;
