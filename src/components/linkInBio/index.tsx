import { linkInBioNav } from "@constants/nav"
import MenuDropDown from "shared/MenuDropDown"


const LinkInBio = () => {
  return (
    <MenuDropDown>
      <div className="grid gap-y-6">
        {linkInBioNav.map((ele, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              <img src={ele.icon} alt="icon" />
              <div>
                <p className="font-semibold text-black text-[16px] leading-5">
                  {ele.name}
                </p>
                <p className="text-[14px] text-gray">{ele.smallText}</p>
              </div>
            </div>
          );
        })}
      </div>
    </MenuDropDown>
  );
}

export default LinkInBio