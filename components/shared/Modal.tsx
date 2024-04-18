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
        content: {
          backgroundColor: "gray",
          width: "50%",
          height: "50%",
          top: "25%",
          left: "25%",
          bottom: "auto",
          rigth: "auto",
          display : "flex", //Puse un flex para poder acomodarlos y abajo como los acomode
          flexDirection : "column",
          justifyContent : "space-evenly"
        },
      }}
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Ejemplo de Modal"
    >
      <h2 className="text-5xl text-center">Editar</h2> {/* Le puse un titulo de editar */}
      <h2>Ejemplo de Modal</h2>
      <div>
      {/* <p className="text-xl">Ingresa algo:</p> */}
      <p className="text-xl">Editar con lo que quieras:</p> 
      <input type="text" value={modalText} onChange={handleInputChange} className="p-2 mt-3" />
      </div>
      
      <div className="flex gap-5 "> {/* PUSE UN DIV */}
        <button className="w-full bg-red-600 py-2 text-white" onClick={handleSave}>Guardar</button>
        <button className="w-full bg-red-600 text-white" onClick={closeModal}>Cerrar</button>
      </div>
    
    </Modal>
  );
};

export default CustomModal;
