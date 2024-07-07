import { useState } from "react";
import Header from "./Header";

function Ver2() {
  const [shrink, setShrink] = useState(0);
  const [relaxation, setRelaxation] = useState(0);
  const [pulse, setPulse] = useState(0);
  return (
    <div className="flex flex-col h-[100%] ">
      <Header />
      <div className="flex flex-col justify-between">
        <h1 className="text-2xl font-bold flex pb-3 my-2 ml-4">측정값 입력</h1>
        <form className="flex flex-col items-center h-[181px] gap-3">
          <div>
            <label className="text-sm font-semibold mr-2">수축기</label>
            <input
              className="rounded-[8px] border w-[274px] h-[36px] ml-5 p-2"
              src={shrink}
              onChange={(e) => setShrink(e.target.value)}
              placeholder="0"
            />
          </div>
          <div>
            <label className="text-sm font-semibold mr-2">이완기</label>
            <input
              className="rounded-[8px] border w-[278px] h-[40px] ml-5 p-2"
              src={relaxation}
              onChange={(e) => setRelaxation(e.target.value)}
              placeholder="0"
            />
          </div>
          <div>
            <label className="text-sm font-semibold mr-2">맥박수</label>
            <input
              className="rounded-[8px] border w-[278px] h-[40px] ml-5 p-2"
              src={pulse}
              onChange={(e) => setPulse(e.target.value)}
              placeholder="0"
            />
          </div>
        </form>
      </div>
      <button className="bg-[#F2F3F5] text-xl text-[#BBBBBB] font-semibold w-[350px] h-[56px] rounded-[6px] mx-auto mb-10">
        저장하기
      </button>
    </div>
  );
}

export default Ver2;
