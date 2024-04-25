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
          variant === "default" &&
            "rounded-3xl px-3 py-3  text-black/80 hover:bg-accent  hover:text-black  border-accent",
          variant === "action" &&
            "hover:bg-primary/80 bg-primary p-6 flex items-stretch rounded-3xl hover:text-background"
        )}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
