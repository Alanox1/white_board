import { ChangeEventHandler } from "react";

interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}
const Input = ({ name, type, placeholder, value, onChange }: inputProps) => {
  return (
    <>
      <input
        className="w-full p-2 border border-gray-200"
        name={name}
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
