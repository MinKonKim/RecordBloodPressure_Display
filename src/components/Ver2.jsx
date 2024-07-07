import { useState } from "react";
import Header from "./Header";
import Input from "./Ver2/InputVer2";

function Ver2() {
  const [shrink, setShrink] = useState(0);
  const [relaxation, setRelaxation] = useState(0);
  const [pulse, setPulse] = useState(0);

  const isFormValid = () => {
    return [shrink, relaxation, pulse].every((value) => parseFloat(value) > 0);
  };

  return (
    <div className="flex flex-col h-[100%]">
      <Header />
      <div className="flex flex-col mb-[20rem] py-3 ">
        <h1 className="text-2xl font-bold flex py-3 my-2 ml-4">측정값 입력</h1>
        <form className="flex flex-col items-center h-[181px] gap-3">
          <div>
            <Input
              src={shrink}
              handleChange={(e) => setShrink(e.target.value)}
              placeholder={0}
              unit={"mmHg"}
              label={"수축기"}
            />
          </div>
          <div>
            <Input
              src={relaxation}
              handleChange={(e) => setRelaxation(e.target.value)}
              placeholder={0}
              unit={"mmHg"}
              label={"이완기"}
            />
          </div>
          <div>
            <Input
              src={pulse}
              handleChange={(e) => setPulse(e.target.value)}
              placeholder={"0"}
              unit={"회/분"}
              label={"맥박수"}
            />
          </div>
        </form>
      </div>
      <button
        className={`text-xl mt-5 font-semibold w-[350px] h-[56px] rounded-[6px] mx-auto mb-10
        ${
          isFormValid()
            ? "bg-[#0AC262] text-white"
            : "bg-[#F2F3F5] text-[#BBBBBB]  "
        }`}
      >
        저장하기
      </button>
    </div>
  );
}

export default Ver2;
