import { ChangeEvent, useState } from "react";

function ColorSelector({ initialColor = "red" }: { initialColor: string }) {
  const [selectedColor, setSelectedColor] = useState(initialColor);

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => { //Puse este ChangEvent
    setSelectedColor(e.target.value);
  };

  return (
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

      {/* 
Reemplace el codigo de arriba con el de aca abajo para hacer que funcionen los botones  */}

      <label>
        <span
          className={`inline-block h-10 w-10 rounded-full bg-red-500 ${
            selectedColor === "red" && "border-2 border-black"
          }`}
        >
          <input
            className="opacity-0 absolute"
            type="radio"
            name="backgroundColor"
            value="red"
            onChange={handleColorChange}
          />
        </span>{" "}
      </label>
      <label>
        <span
          className={`inline-block h-10 w-10 rounded-full bg-blue-500 ${
            selectedColor === "blue" && "border-2 border-black"
          }`}
        >
          <input
            className="opacity-0 absolute"
            type="radio"
            name="backgroundColor"
            value="blue"
            onChange={handleColorChange}
          />
        </span>{" "}
      </label>
      <label>
        <span
          className={`inline-block h-10 w-10 rounded-full bg-yellow-500 ${
            selectedColor === "yellow" && "border-2 border-black"
          }`}
        >
          <input
            className="opacity-0 absolute"
            type="radio"
            name="backgroundColor"
            value="yellow"
            onChange={handleColorChange}
          />
        </span>{" "}
      </label>
      <label>
        <span
          className={`inline-block h-10 w-10 rounded-full bg-green-500 ${
            selectedColor === "green" && "border-2 border-black"
          }`}
        >
          <input
            className="opacity-0 absolute"
            type="radio"
            name="backgroundColor"
            value="green"
            onChange={handleColorChange}
          />
        </span>{" "}
      </label>
    </div>
  );
}

export default ColorSelector;
