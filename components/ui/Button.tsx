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
          " rounded-3xl px-3 py-3 text-gray-400 border ",
          actionButton &&
            "hover:bg-primary m-auto w-full rounded-3xl  hover:text-background"
        )}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
