import { IModalProps } from "./interface";

import { twMerge } from "tailwind-merge";

import CloseIcon from "@assets/svg/32px icon button.svg";

const Drawer = ({
  onClose,

  children,
  header,
}: IModalProps) => {
  return (
    <div className="fixed flex inset-0 z-[9] transition-opacity overflow-auto w-[100vw] h-[100vh] bg-[#e8e8e8]/70 rounded-[20px] ">
      <div
        className="fixed inset-0 z-[0] bg-gray-500 bg-opacity-75 w-[100vw] h-[100vh]"
        onClick={() => {
          onClose();
        }}
      ></div>
      <div
        className={twMerge(
          `bg-white grid absolute left-auto right-0 w-full max-w-[400px] h-full overflow-auto ${
            header ? "auto-rows-max-auto " : ""
          }`
        )}
      >
        {header && (
          <div className=" z-[1] p-[24px] pb-[10px] w-full sticky top-[0px] bg-white">
            <div className="flex justify-between">
              <h1 className="text-[24px] leading-[28px] font-bold text-black">
                {header}
              </h1>
              <div className="flex justify-end">
                <img
                  src={CloseIcon}
                  alt="close icon"
                  className="w-[34px] h-[34px] cursor-pointer"
                  onClick={onClose}
                 
                />
              </div>
            </div>
          </div>
        )}

        <div className="pt-6">{children}</div>
      </div>
    </div>
  );
};



export default Drawer;
