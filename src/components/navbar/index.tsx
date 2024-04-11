import { middleNav } from "@constants/nav";
import { NavLink } from "react-router-dom";
import logo from "@assets/svg/mainstack-logo.svg";
import bell from "@assets/svg/small tertiary button.svg";
import message from "@assets/svg/Frame 6853.svg";
import menu from "@assets/svg/menu.svg";
import { useGetUser } from "@hooks/revenue/useGetUser";
import UserNavbar from "components/userNavbar";
import { useState } from "react";
import LinkInBio from "components/linkInBio";
import apps from "@assets/svg/apps.svg";

const Navbar = () => {
  const [showUserNav, setShowUserNav] = useState(false);
  const [showBio, setShowBio] = useState(false);
  const { userData } = useGetUser();
  return (
    <div className="flex justify-between  items-center m-6 border-[2px] border-[#fff] rounded-[100px] shadow-sm shadow-[#2D3B43]/50 h-[64px] px-[38px]">
      <div>
        <img src={logo} alt="/" />
      </div>
      <div className="flex items-center">
        {middleNav.map((ele, idx) => {
          return (
            <div key={idx} className="flex items-center gap-2 mr-[20px]">
              <NavLink
                to={ele.path}
                className={({ isActive, isPending }) =>
                  isPending
                    ? " font-[600] text-[16px] leading-5 text-gray"
                    : isActive
                    ? " flex gap-2 bg-black text-[#fff] rounded-[100px] px-[18px] py-[8px]"
                    : "pr-2 flex gap-2"
                }
              >
                <img src={ele.icon} alt="icon" />
                <p>{ele.name}</p>
              </NavLink>
            </div>
          );
        })}
        <div
          className={` ${
            showBio === true
              ? "bg-black flex text-white  px-4 py-2 rounded-[100px] "
              : " bg-white "
          } flex  gap-2 cursor-pointer`}
          onClick={() => {
            setShowBio((prev) => !prev);
          }}
        >
          <img src={apps} alt="icon" />
          <p>Apps</p>
          {showBio && (
            <div className="bg-black flex px-4">
              <p>Link in Bio</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-2 cursor-pointer">
        <img src={bell} alt="a bell icon" />
        <img src={message} alt="a message icon" />
        <div
          className="flex items-center gap-2 bg-lightGray rounded-[100px] px-[12px] py-[4px]"
          onClick={() => {
            setShowUserNav(!showUserNav);
          }}
        >
          <p className="w-[32px] h-[32px] flex items-center p-2 rounded-full text-[#fff] text-[14px] leading-[16px] font-[600] bg-[#5C6670]">
            {userData?.first_name[0]}
            {userData?.last_name[0]}
          </p>
          <img src={menu} alt="menu" />
        </div>
      </div>
      <div className="absolute z-10 top-[95px] right-0 ">
        {showUserNav && <UserNavbar />}
      </div>

      <div className="absolute z-10 top-[95px] left-[810px] ">
        {showBio && <LinkInBio />}
      </div>
    </div>
  );
};

export default Navbar;
