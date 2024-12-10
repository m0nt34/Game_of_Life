import { twoDArray } from "../data/2dArray";
import { lexiconP } from "../data/Lexicon";
import { useBoard } from "../store/board";
import { useButtons } from "../store/btns";

type patternType = { i: number; j: number };
const Lexicon = () => {
  const { setBoard } = useBoard();
  const { play, setPlay } = useButtons();

  const setNewBoardPattern = (patterns: patternType[]) => {
    const newBoardWithPattern = twoDArray();
    patterns.forEach((pattern) => {
      newBoardWithPattern[pattern.i][pattern.j] = true;
    });
    if (play) setPlay();
    setBoard(newBoardWithPattern);
  };
  return (
    <div className="flex flex-col gap-[6px] select-none mt-2 overflow-auto h-[200px] custom-scrollbar">
      {lexiconP.map((pattern, i) => (
        <div
          key={i}
          className="flex items-center gap-[10px] bg-[#334370] p-2 rounded-lg cursor-pointer hover:bg-[#374a7e] transition-colors"
          onClick={() => setNewBoardPattern(pattern.patterns)}
        >
          <img src={pattern.img} alt="" className="h-16 w-16 rounded-md" />
          <div className="flex flex-col">
            <h1 className="font-semibold sm400:text-sm">{pattern.name}</h1>
            <p className="text-xs sm400:text-[10px]">{pattern.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lexicon;
