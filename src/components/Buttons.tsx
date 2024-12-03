import Pause from "../assets/icons/Pause";
import Play from "../assets/icons/Play";
import Restart from "../assets/icons/Restart";
import { useButtons } from "../store/btns";

const Buttons = () => {
  const { play, setPlay, setReset, setSpeed, speed } = useButtons();
  return (
    <div className="flex select-none w-full justify-between">
      <div className="flex gap-[10px]">
        <button
          onClick={setPlay}
          className="flex items-center justify-between w-28 bg-[#2b385c] rounded-lg p-3 pr-4 text-white font-semibold text-2xl transition-opacity hover:opacity-90 active:opacity-80"
        >
          {play ? (
            <>
              <Pause className="h-7 w-7" />
              STOP
            </>
          ) : (
            <>
              <Play className="h-[26px] w-[26px]" />
              PLAY
            </>
          )}
        </button>
        <button
          onClick={setReset}
          className="flex items-center justify-center bg-[#2b385c] gap-[5px] rounded-lg p-3 pr-4 text-white font-semibold text-2xl transition-opacity hover:opacity-90 active:opacity-80"
        >
          <Restart className="h-[26px] w-[26px]" />
          RESTART
        </button>
      </div>
      <input
        type="range"
        onChange={(e) => {
          setSpeed(parseInt(e.target.value));
        }}
        value={speed}
        min={25}
        step={25}
        max={500}
      />
    </div>
  );
};

export default Buttons;
