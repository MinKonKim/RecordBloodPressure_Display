import { useEffect, useRef, useState } from "react";

function Input({ src, handleChange, name, unit }) {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleFocus = () => {
    setIsActive(true);
  };
  const handleBlur = () => {
    setIsActive(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // 숫자만 허용하고, 최대 5자리로 제한
    if (/^\d*$/.test(value) && value.length <= 5) {
      setInputValue(value);
      handleChange(e);
    }
  };

  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isActive]);

  if (isActive || inputValue) {
    return (
      <div
        className={`border ${
          isActive ? "border-[#121212]" : "border-transparent"
        } rounded-[16px] w-full h-[72px] flex flex-col items-start justify-center`}
      >
        <label className="ml-3 text-sm font-semibold text-slate-400">
          {name}
        </label>
        <div className="flex w-full relative">
          <input
            ref={inputRef}
            className="font-semibold w-[200px] ml-3 focus:outline-none"
            alt={name}
            placeholder={src}
            src={src}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={inputValue}
            type="text"
          />
          {(isActive || parseFloat(inputValue) > 0) && (
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 font-semibold text-end mr-3">
              {unit}
            </span>
          )}
        </div>
      </div>
    );
  }
  return (
    <div
      onClick={handleFocus}
      className="rounded-[16px] w-full h-[72px] flex items-center justify-center cursor-pointer"
    >
      <p className="font-semibold w-full p-4 text-slate-300 flex items-start">
        {name}
      </p>
    </div>
  );
}

export default Input;
