import { userNav } from "@constants/nav";
import { useGetUser } from "@hooks/revenue/useGetUser";
import MenuDropDown from "shared/MenuDropDown";

const UserNavbar = () => {
  const { userData } = useGetUser();
  return (
    <MenuDropDown>
      <div className="flex gap-4">
        <p className="w-[32px] h-[32px] flex items-center p-2 rounded-full text-[#fff] text-[14px] leading-[16px] font-[600] bg-[#5C6670]">
          {userData?.first_name[0]}
          {userData?.last_name[0]}
        </p>
        <div>
          <p className="font-semibold text-black text-[16px] leading-5">
            {userData?.first_name} {userData?.last_name}
          </p>
          <p className="text-[14px] text-gray">{userData?.email}</p>
        </div>
      </div>
      <div className="pt-8 grid gap-y-6">
        {userNav.map((nav, idx) => {
          return (
            <div key={idx} >
              <p>{nav}</p>
            </div>
          );
        })}
      </div>
    </MenuDropDown>
  );
};

export default UserNavbar;
