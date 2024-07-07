import { useEffect, useRef, useState } from "react";

function Input({ src, handleChange, name, unit }) {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);

  const handleFocus = () => {
    setIsActive(true);
  };
  const handleBlur = () => {
    setIsActive(false);
  };
  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isActive]);

  if (isActive || src) {
    return (
      <div className="border border-[#121212] rounded-[16px] w-full  h-[72px] flex flex-col items-start justify-center ">
        <label className="ml-3 text-sm text-slate-400">{name}</label>
        <div className="flex w-full">
          <input
            ref={inputRef}
            className={`font-semibold w-[200px] ml-3 focus:outline-none`}
            alt={name}
            placeholder={src}
            src={src}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span className="font-semibold flex-1 text-end mr-3">{unit}</span>
        </div>
      </div>
    );
  }
  return (
    <div
      onClick={handleFocus}
      className={`rounded-[16px] w-full  h-[72px] flex items-center justify-center`}
    >
      <p className="font-semibold w-[350px] p-4 rounded-[16px] text-slate-300 flex items-start">
        {name}
      </p>
    </div>
  );
}

export default Input;
