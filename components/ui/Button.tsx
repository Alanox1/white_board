"use client";
import clsx from "clsx";
import { ReactNode } from "react";
import { FiMenu } from "react-icons/fi";

interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  variant: "action" | "color" | "default";
}

const Button = ({ type, text, onClick, variant = "default" }: buttonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          variant === "default" && "rounded-3xl px-3 py-3 text-gray-400 border",
          variant === "action" &&
            "hover:bg-primary m-auto w-full rounded-3xl  hover:text-background"
        )}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
