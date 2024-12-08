import React from "react";
import { FlankerProps } from "../../types/flanker-type";

const FlankerCart: React.FC<FlankerProps> = ({ title, description, owner }) => {
  return (
    <div className="w-48 flex flex-col gap-2">
      <div className="w-full flex flex-col p-3 gap-2 rounded-sm bg-[#E9F1F1]  shadow-[0px_4px_21px_6px_#B9C2B72E]">
        <div className="w-full cursor-default flex gap-4 p-1 justify-center items-center bg-[#7DDFF0] text-[#24728A] rounded-2xl font-bold">
          <img src="/icon/Vector.png" alt="" />
          {title}
        </div>
        <p className="cursor-default text-[#605850] text-center text-sm">
          {description}
        </p>
        <div className="flex justify-between items-center ">
          <span className="flex items-center gap-1 bg-white text-[8px] rounded-sm px-1 cursor-pointer ">
            <span className="text-blue-600">+</span>
            اضافه کردن
          </span>
        </div>
      </div>
      <div className="w-full cursor-default bg-[#D6E2E2] flex justify-center items-center p-1 rounded-sm text-xs text-[#605850] gap-1">
        طراحی شده توسط
        <span className="text-green-950">{owner}</span>
      </div>
    </div>
  );
};

export default FlankerCart;
