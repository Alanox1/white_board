"use client";
import clsx from "clsx";
import { ReactNode } from "react";
import { FiMenu } from "react-icons/fi";

interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
}

const Button = ({ type, text, onClick, actionButton }: buttonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          actionButton && "bg-orange-700 m-auto w-full p-2 text-white",
          "bg-pink-700 px-6 py-6 text-white"
        )}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
