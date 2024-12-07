import Book from "../assets/icons/Book";
import { Gear } from "../assets/icons/Gear";
import ButtonModal from "./ButtonModal";
import Lexicon from "./Lexicon";
import Settings from "./Settings";

const Header = () => {
  return (
    <header className="flex w-full text-white justify-between">
      <h1 className="text-5xl sm850:text-4xl sm650:text-2xl sm450:text-xl font-semibold">
        Conway’s Game of Life
      </h1>
      <div className="flex items-center gap-[6px] sm650:gap-1">
        <ButtonModal
          Icon={
            <Book className="h-7 w-7 sm850:h-5 sm850:w-5 sm450:w-[15px] sm450:h-[15px]" />
          }
          element={<Lexicon />}
          title="LEXICON"
        />
        <ButtonModal
          Icon={
            <Gear className="h-7 w-7 sm850:h-5 sm850:w-5 sm450:w-[15px] sm450:h-[15px]" />
          }
          element={<Settings />}
          title="SETTINGS"
        />
      </div>
    </header>
  );
};

export default Header;
