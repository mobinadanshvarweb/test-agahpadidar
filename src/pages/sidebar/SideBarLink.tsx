import React, { useState } from "react";
import { SideBarLinkProps } from "../../types/side-bar-link-type";

const SideBarLink: React.FC<SideBarLinkProps> = ({ text, submenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full flex flex-col rounded-md shadow-inner cursor-pointer"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="w-full flex bg-gray-100 rounded-md text-[#E1EFFB]">
        <div
          className={`flex justify-center items-center px-2  rounded-tr-md rounded-br-md ${
            isOpen && submenu ? "bg-[#CECECE]" : "bg-gray-200"
          }`}
        >
          <img src="/icon/Clock.png" alt="icon" />
        </div>
        <div className="flex-1 py-1 bg-[#7DDFF0] text-xl flex items-center justify-center rounded-tl-md rounded-bl-md">
          {text}
        </div>
      </div>

      {submenu && (
        <ul
          className={`transition-all overflow-hidden  bg-[#CECECE] text-gray-800 flex flex-col ${
            isOpen ? "max-h-40" : "max-h-0"
          }`}
        >
          {submenu.map((item) => (
            <li
              key={item.id}
              className="w-full flex justify-between items-center  text-[#E1EFFB] text-sm"
            >
              <span className="bg-[#d5d5d5c8] h-full flex justify-center items-center px-1.5">
                <img
                  src={item.icon}
                  alt="submenu icon"
                  className="w-5 h-5 mr-2"
                />
              </span>
              <span className="flex-1 flex justify-center items-center py-2">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SideBarLink;
