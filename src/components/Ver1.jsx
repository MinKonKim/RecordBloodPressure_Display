import { useState } from "react";
import Header from "./Header";
import Input from "./Ver1/InputVer1";

function Ver1() {
  const [shrink, setShink] = useState(0);
  const [relaxation, setRelaxation] = useState(0);
  const [pulse, setPulse] = useState(0);

  const isFormValid = () => {
    return [shrink, relaxation, pulse].every((value) => parseFloat(value) > 0);
  };
  return (
    <div className="flex flex-col h-[100%] justify-between">
      <Header />
      <main className="flex flex-col p-5 mb-[20rem] max-h-[742px] mx-auto">
        <h1 className="text-2xl font-bold flex pb-3 my-2">측정값 입력</h1>
        <form className="flex flex-col border rounded-[16px] items-center h-[181px] w-[350px]">
          <Input
            src={shrink}
            handleChange={(e) => setShink(e.target.value)}
            name={"수축기"}
            unit={"mmHg"}
          />
          <hr className="w-[288px]" />
          <Input
            src={relaxation}
            handleChange={(e) => setRelaxation(e.target.value)}
            name={"이완기"}
            unit={"mmHg"}
          />
          <hr className="w-[288px]" />
          <Input
            src={pulse}
            handleChange={(e) => setPulse(e.target.value)}
            name={"맥박수"}
            unit={"회/분"}
          />
        </form>
      </main>
      <button
        className={`text-xl  font-semibold w-[350px] h-[56px] rounded-[6px] mx-auto mb-10
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

export default Ver1;
