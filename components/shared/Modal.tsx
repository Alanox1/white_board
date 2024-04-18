"use client";
import React, { useState } from "react";
import { MdHeight } from "react-icons/md";
import Modal from "react-modal";

// Establecemos la aplicación Modal en el elemento #root del DOM.
Modal.setAppElement("body");

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const CustomModal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  const [modalText, setModalText] = useState("");

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
        content: { backgroundColor: "gray", width: "50%", height: "50%" },
      }}
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Ejemplo de Modal"
    >
      <h2>Ejemplo de Modal</h2>
      <p>Ingresa algo:</p>
      <input type="text" value={modalText} onChange={handleInputChange} />
      <button onClick={handleSave}>Guardar</button>
      <button onClick={closeModal}>Cerrar</button>
    </Modal>
  );
};

export default CustomModal;
