import Pause from "../assets/icons/Pause";
import Play from "../assets/icons/Play";
import Restart from "../assets/icons/Restart";
import { useButtons } from "../store/btns";

const Buttons = () => {
  const { play, setPlay, setReset, setSpeed, speed } = useButtons();
  return (
    <div className="flex select-none w-full justify-between sm450:pt-2">
      <div className="flex gap-2 sm650:gap-[5px]">
        <button
          onClick={setPlay}
          className="flex items-center justify-between w-28 sm850:w-[85px] sm450:w-[60px] bg-[#2b385c] rounded-lg sm850:rounded-md sm650:rounded-[5px] sm450:rounded-[3px] outline-none p-3 pr-4 sm850:p-2 sm850:pr-3 sm450:p-[5px] sm450:pr-2 sm450:py-0 text-white font-semibold text-2xl sm850:text-[18px] sm450:text-[12px] transition-opacity hover:opacity-90 active:opacity-80"
        >
          {play ? (
            <>
              <Pause className="h-7 w-7 sm850:h-5 sm850:w-5 sm450:w-[15px] sm450:h-[15px]" />
              STOP
            </>
          ) : (
            <>
              <Play className="h-[26px] w-[26px] sm850:h-[18px] sm850:w-[18px] sm450:w-[14px] sm450:h-[14px]" />
              PLAY
            </>
          )}
        </button>
        <button
          onClick={setReset}
          className="flex items-center justify-center bg-[#2b385c] gap-[5px] rounded-lg sm850:rounded-md sm650:rounded-[5px] sm450:rounded-[3px] outline-none p-3 pr-4 sm850:p-2 sm850:pr-3 sm450:p-[5px] sm450:pr-2 sm450:py-0 text-white font-semibold text-2xl sm850:text-[18px] sm450:text-[12px] transition-opacity hover:opacity-90 active:opacity-80"
        >
          <Restart className="h-[26px] w-[26px] sm850:h-[18px] sm850:w-[18px] sm450:w-[14px] sm450:h-[14px]" />
          RESTART
        </button>
      </div>
      <div className="flex flex-col gap-[5px] items-end justify-center">
        <input
          type="range"
          onChange={(e) => setSpeed(525 - parseInt(e.target.value))}
          className="sm450:w-4/5 sm450:h-[5px]"
          value={525 - speed}
          min={25}
          step={25}
          max={500}
        />
        <span className="text-white font-semibold sm450:text-sm">SPEED</span>
      </div>
    </div>
  );
};

export default Buttons;
