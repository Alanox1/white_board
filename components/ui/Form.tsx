"use client";
import React from "react";
import { useRef, ReactNode } from "react";
interface formProps {
  children: ReactNode;
  action: (FormData: FormData) => Promise<void | boolean>;
  className?: string;
  onSubmit?: () => void;
  onDelete? : (param : boolean) => void;
}
const Form = ({ children, action, className, onSubmit }: formProps) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      className={className}
      onSubmit={onSubmit}
      ref={ref}
      action={async (fromData) => {
        await action(fromData);
        ref.current?.reset();
      }}
    >
      {children}
    </form>
  );
};

export default Form;
