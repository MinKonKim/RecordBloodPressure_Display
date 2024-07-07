import { useState } from "react";
import Header from "./Header";
import Input from "./Input";

function Ver1() {
  const [shrink, setShink] = useState(0);
  const [relaxation, setRelaxation] = useState(0);
  const [pulse, setPulse] = useState(0);

  return (
    <div className="flex flex-col h-[100%] justify-between">
      <Header />
      <main className="flex-grow py-10 mb-[20rem] max-h-[742px] mx-auto">
        <h1 className="text-2xl font-bold flex pb-3 my-2">측정값 입력</h1>
        <form className="flex flex-col border rounded-[16px] items-center h-[181px]">
          <Input
            src={shrink}
            onChange={(e) => setShink(e.target.value)}
            name={"수축기"}
            unit={"mmHg"}
          />
          <hr className="w-[18rem]" />
          <Input
            src={relaxation}
            onChange={(e) => setRelaxation(e.target.value)}
            name={"이완기"}
            unit={"mmHg"}
          />
          <hr className="w-[18rem]" />
          <Input
            src={pulse}
            onChange={(e) => setPulse(e.target.value)}
            name={"맥박수"}
            unit={"회/분"}
          />
        </form>
      </main>
      <button className="bg-[#F2F3F5] text-2xl text-[#BBBBBB] font-semibold w-[350px] h-[56px] rounded-[6px] mx-auto mb-10">
        저장하기
      </button>
    </div>
  );
}

export default Ver1;
