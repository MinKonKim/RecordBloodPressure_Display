import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  const handleNavigateToVer1 = () => {
    navigate("/ver1");
  };

  const handleNavigateToVer2 = () => {
    navigate("/ver2");
  };
  return (
    <div className="bg-[#121212] h-[100vh] flex  items-center justify-center gap-5">
      <button
        className="bg-white p-5 w-[250px] rounded-[8px] text-2xl font-semibold hover:brightness-90"
        onClick={handleNavigateToVer1}
      >
        버전 1
      </button>
      <button
        className="bg-white p-5 w-[250px] rounded-[8px] text-2xl font-semibold hover:brightness-90"
        onClick={handleNavigateToVer2}
      >
        버전 2
      </button>
    </div>
  );
}

export default MainPage;
