import SideBarLink from "./SideBarLink";
import SideBarUser from "./SideBarUser";

const SideBar = () => {
  const submenuItems1 = [
    { id: 1, text: "آزمون های نا تمام", icon: "/icon/job.png" },
    { id: 2, text: "آزمون های دریافت شده", icon: "/icon/edu.png" },
    { id: 3, text: "آزمون های خریداری شده", icon: "/icon/Group.png" },
  ];
  const submenuItems2 = [
    { id: 1, text: "آزمون های شغلی", icon: "/icon/job.png" },
    { id: 2, text: " آزمون های تحصیلی", icon: "/icon/edu.png" },
    { id: 3, text: "آزمون های کودکان", icon: "/icon/Group.png" },
  ];

  return (
    <div className="flex flex-col items-center gap-4 w-60 relative">
      <div className="w-full flex justify-center items-center ">
        <SideBarUser />
      </div>
      <div className="w-full bg-white flex flex-col gap-4 p-5 rounded min-h-96">
        <SideBarLink submenu={submenuItems1} text="آزمـــون آمــاده" />
        <SideBarLink submenu={submenuItems2} text="اجـــرای آزمــون" />
        <SideBarLink text="گزارش لینک ها" />
        <SideBarLink text="نتـیجـه آزمــون" />
      </div>
    </div>
  );
};

export default SideBar;
