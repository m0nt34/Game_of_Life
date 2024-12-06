import Book from "../assets/icons/Book";
import { Gear } from "../assets/icons/Gear";

const Header = () => {
  return (
    <header className="flex w-full text-white justify-between">
      <h1 className="text-5xl sm850:text-4xl sm650:text-2xl sm450:text-xl font-semibold">
        Conway’s Game of Life
      </h1>
      <div className="flex items-center gap-[6px] sm650:gap-1">
        <button className="flex items-center justify-between bg-[#2b385c] rounded-lg sm850:rounded-md sm650:rounded-[5px] sm450:rounded-1 outline-none p-3 sm850:p-2 sm450:p-[5px] text-white font-semibold text-2xl sm850:text-[18px] sm450:text-[12px] transition-opacity hover:opacity-90 active:opacity-80">
          <Book className="h-7 w-7 sm850:h-5 sm850:w-5 sm450:w-[15px] sm450:h-[15px]" />
        </button>
        <button className="flex items-center justify-between bg-[#2b385c] rounded-lg sm850:rounded-md sm650:rounded-[5px] sm450:rounded-1 outline-none p-3 sm850:p-2 sm450:p-[5px] text-white font-semibold text-2xl sm850:text-[18px] sm450:text-[12px] transition-opacity hover:opacity-90 active:opacity-80">
          <Gear className="h-7 w-7 sm850:h-5 sm850:w-5 sm450:w-[15px] sm450:h-[15px]" />
        </button>
      </div>
    </header>
  );
};

export default Header;
