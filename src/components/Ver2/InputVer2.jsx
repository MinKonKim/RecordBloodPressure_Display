import { useEffect, useRef, useState } from "react";

function Input({ src, handleChange, placeholder, unit, label }) {
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

  return (
    <div className="relative w-full flex gap-7">
      <label className="text-sm font-semibold flex justify-center items-center">
        {label}
      </label>
      <div
        className={`border ${
          isActive ? "border-[#121212]" : ""
        } rounded-[8px] w-[274px] h-[36px] flex flex-col justify-center`}
      >
        <div className="flex  w-full relative">
          <input
            ref={inputRef}
            className="font-medium w-full h-full pl-3 pr-12 focus:outline-none"
            alt={placeholder}
            placeholder={isActive || inputValue ? placeholder : src}
            src={src}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={inputValue}
            type="text" // type="number"를 사용할 경우 e.target.value가 문자열로 제공됨
          />
          {(isActive || parseFloat(inputValue) > 0) && (
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 font-semibold text-end mr-3">
              {unit}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Input;
