import Flanker from "./pages/flanker/Flanker";
import SideBar from "./pages/sidebar/SideBar";

const Layout = () => {
  return (
    <div className="w-full min-h-[100vh] bg-[#E9F0EF] overflow-x-hidden relative p-3 lg:p-20 flex flex-wrap lg:flex-nowrap font-custom ">
      <span className="hidden lg:block w-135 h-135 -top-13 -left-24 gap-0 rounded-full  bg-custom-linear angle-0 absolute z-20 opacity-45"></span>
      <span className="hidden lg:block w-[68px] h-[68px] absolute top-[70px] left-[43px] gap-0 rounded-full bg-custom-conic-gradient shadow-custom-1 backdrop-blur-3"></span>
      <span className="hidden lg:block w-55 h-55 top-77 left-50 gap-0 rounded-full opacity-81 angle-0 absolute bg-[#42BAD4]"></span>
      <span className="hidden lg:block w-[27.68px] h-[27.68px] absolute top-[90px] left-[63px] gap-0 border-11 rounded-full border-custom-gray  shadow-custom-3"></span>
      <SideBar />
      <Flanker />
    </div>
  );
};

export default Layout;
