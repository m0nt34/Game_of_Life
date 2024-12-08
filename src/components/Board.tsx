import { useEffect, useRef, useState } from "react";
import { countLiveNeighbors } from "../utils/countLiveNeighbors ";
import { useButtons } from "../store/btns";
import { twoDArray } from "../data/2dArray";
import { useSettings } from "../store/settings";
const Board = () => {
  const { play, setPlay, reset, setReset, speed, setSpeed } = useButtons();
  const { rules, border, mainColor } = useSettings();
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [Board, setBoard] = useState<boolean[][]>(twoDArray);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);
  const handleChange = (i: number, j: number, click: boolean) => {
    if (mouseDown || click)
      setBoard((prev) => {
        const newBoard = [...prev];
        newBoard[i] = [...prev[i]];
        newBoard[i][j] = !newBoard[i][j];

        return newBoard;
      });
  };

  const startLife = () => {
    interval.current = setInterval(() => {
      setBoard((prev) =>
        prev.map((row, i) =>
          row.map((cell, j) => {
            const count = countLiveNeighbors(prev, i, j);
            return (
              (cell && rules.livesOn.includes(count)) ||
              (!cell && rules.becomesAlive.includes(count))
            );
          })
        )
      );
    }, speed);
  };
  const endLife = () => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  };
  useEffect(() => {
    if (play) {
      endLife();
      startLife();
    } else {
      endLife();
    }
    return () => endLife();
  }, [play, speed, rules.livesOn, rules.becomesAlive]);
  useEffect(() => {
    if (reset) {
      setReset();
      setBoard(twoDArray);
      setSpeed(100);
      if (play) setPlay();
    }
  }, [reset]);
  return (
    <table>
      <tbody
        className="select-none border border-[#2b385c]"
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
        onMouseLeave={() => setMouseDown(false)}
      >
        {Board.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td
                onMouseEnter={() => handleChange(i, j, false)}
                onMouseDown={() => handleChange(i, j, true)}
                className={`w-[10px] h-[10px] ${
                  border ? "border border-[#2b385c]" : null
                } sm850:w-2 sm850:h-2 sm650:w-[6px] sm650:h-[6px] sm450:w-[4.5px] sm450:h-[4.5px]`}
                key={`${i}-${j}`}
                style={{ backgroundColor: cell ? mainColor : "transparent" }}
                draggable={false}
              ></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Board;
