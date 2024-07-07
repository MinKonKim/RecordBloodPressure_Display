import Battery from "../assets/Battery.png";
import Cellular from "../assets/Cellular_Connection.png";
import Back from "../assets/icon_back.png";
import Wifi from "../assets/Wifi.png";

function Header() {
  return (
    <div className="bg-white mt-5 w-[24rem] h-[102px] top-0 left-0 z-10">
      <div className="flex justify-between items-center ">
        <div className="ml-10">9:41</div>
        <div className="flex gap-2 mr-10  ">
          <img src={Cellular} alt="Cellular" />
          <img src={Wifi} alt="Wifi" />
          <img src={Battery} alt="Battery" />
        </div>
      </div>
      <div className="flex p-5 mx-auto font-bold text-lg items-center justify-between">
        <div className=" ml-0">
          <img src={Back} alt="BackArrow" className="" />
        </div>
        <div className="flex-1 text-center">
          <h1>혈압 기록하기</h1>
        </div>
        <div className="w-[32px]"></div>
      </div>
    </div>
  );
}

export default Header;
