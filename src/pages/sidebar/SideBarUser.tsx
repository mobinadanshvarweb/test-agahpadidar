import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setName, setUserName } from "../../redux/slice/user-slice";
import { useState } from "react";

const SideBarUser = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.user.username);
  const [focus, setFoucs] = useState(false);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full bg-custom-gradient flex gap-3 justify-center items-center py-2  rounded">
        <span className="cursor-pointer">
          <img src="/icon/pro.png" alt="" />
        </span>
        <input
          onFocus={() => setFoucs(true)}
          onBlur={() => setFoucs(false)}
          onChange={(e) => dispatch(setUserName(e.target.value))}
          value={username}
          type="text"
          className="p-1 text-center text-[#E1EFFB] rounded flex justify-center items-center placeholder:text-center  outline-none bg-[#22B3B3] 
        bg-gradient-to-r hover:from-white/50 hover:to-white/10 hover:backdrop-blur-md border border-white/30
        "
          placeholder="نام کاربری"
        />
      </div>
      {focus && username.length > 0 && (
        <div className="w-full flex justify-end">
          <button
            onClick={() => dispatch(setName())}
            className="bg-[#CECECE] py-1 px-3 rounded flex justify-center items-center"
          >
            تغییر نام
          </button>
        </div>
      )}
    </div>
  );
};

export default SideBarUser;
