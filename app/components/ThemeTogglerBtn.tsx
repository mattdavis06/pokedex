"use client";
import { ThemeTogglerBtnType } from "../types";

const ThemeTogglerBtn: React.FC<ThemeTogglerBtnType> = ({
  theme,
  toggleTheme,
}) => {
  return (
    <div
      onClick={toggleTheme}
      className={`fixed right-0 top-0 z-10 cursor-pointer rounded-bl-lg  px-4 py-2 shadow-md transition duration-200 xl:rounded-bl-none xl:bg-transparent xl:shadow-none ${theme === "light" ? "bg-white" : "bg-black "}`}
    >
      <div className="group flex items-center transition duration-200">
        {theme === "light" ? (
          <>
            <p className="pr-1 text-xs text-black/70 group-hover:text-black lg:text-sm">
              Dark Mode:
            </p>
            <span className="icon-[ic--twotone-dark-mode] h-5 w-5 text-black lg:h-6 lg:w-6 "></span>
          </>
        ) : (
          <>
            <p className="pr-1 text-xs text-white/70 group-hover:text-white lg:text-sm">
              Light Mode:
            </p>
            <span className="icon-[ic--twotone-wb-sunny] h-5 w-5 text-white lg:h-6 lg:w-6 "></span>
          </>
        )}
      </div>
    </div>
  );
};

export default ThemeTogglerBtn;
