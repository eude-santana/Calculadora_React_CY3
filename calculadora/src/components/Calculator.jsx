import { useState } from "react";
import { evaluate } from "mathjs";

export function Calculator() {

  const buttonClassName = "justify-center items-center";

  const hoverClassName = "hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]";

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  }

  const handleCalculate = () => {
    try {
      if (!input) return;
      setResult(evaluate(input).toString());
    }catch (error) {
      setResult("Error");
    }
  }

  const handleClear = () => {
    setInput("");
    setResult("");
  }

  const handleDelete = () => setInput((prev) => prev.slice(0, -1)); 

  return (
    <div className="grid shadow-md w-[360px] text-2xl font-bold">
      <div className="bg-[#CCD5AE] text-while min-h-[180px] glow flex flex-col justify-end item-end p-8 gap-4">
        <span className="flex w-fit justify-self-end text-xl">{input}</span>
        <div className="flex justify-between w-full items-center text-5xl"><span>=</span>
          <span>{result}</span>
        </div>
      </div>
      <div className="bg-white grow h-[480px] grid-cols-4">
        <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE] bg-[#E9EDC9] text-[#D4A373]" onClick={() => handleClick("+")}>+</button>

        <button className="justify-center items-center hover:opacity-75 transition ease-in-out duration-300 hover:text-[#CCD5AE]" onClick={() => handleClick("7")}>7</button>

        <button className={`${buttonClassName} ${hoverClassName} text-sm`} onClick={handleDelete}>
          DEL
        </button>

        <button className={`${buttonClassName} ${hoverClassName} text-sm`} onClick={handleClear}>
          C
        </button>

        <button className={`${buttonClassName} ${hoverClassName} bg-[#FEFAE0]`} onClick={handleCalculate}>=</button>
      </div>

    </div>
    );
}