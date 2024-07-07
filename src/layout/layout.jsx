function Layout({ children }) {
  return (
    <div className="bg-[#121212] h-[100vh] flex items-center justify-center">
      <div className=" flex  justify-center items-center bg-white h-[840px] w-[390px]">
        {children}
      </div>
    </div>
  );
}

export default Layout;
