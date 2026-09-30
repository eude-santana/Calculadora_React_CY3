import { useState } from "react";

export function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  }

  return (
    <div className="grid shadow-md w-[360px] text-2xl font-bold">
      <div className="bg-[#CCD5AE] text-while min-h-[180px] glow flex flex-col justify-end item-end p-8 gap-4">
        <span className="flex w-fit justify-self-end text-xl">{input}</span>
        <div className="flex justify-between w-full items-center text-5xl"><span>=</span></div>
      </div>
    </div>
    );
}