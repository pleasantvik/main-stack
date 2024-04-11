import { ReactNode } from "react";

const MenuDropDown = ({ children }: { children: ReactNode }) => {
  return (
  
      <div className="flex flex-col w-[400px]  bg-white  border-[1px] border-white shadow-black/20 mx-4 p-6  rounded-md shadow-md">{children}</div>
   
  )
};

export default MenuDropDown;
