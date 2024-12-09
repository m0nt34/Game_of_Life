import { useEffect, useRef, useState } from "react";
import { useButtons } from "../store/btns";
import { useSettings } from "../store/settings";
import { useBoard } from "../store/board";
import Cell from "./Cell";

const Board = () => {
  const { play, setPlay, reset, setReset, speed, setSpeed } = useButtons();
  const { rules, border, mainColor } = useSettings();
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);
  const { board, setBoardCell, setBoardToDefault, setBoardAfterTick } =
    useBoard();

  const handleChange = (i: number, j: number, click: boolean) => {
    if (mouseDown || click) setBoardCell(i, j);
  };

  const startLife = () => {
    interval.current = setInterval(() => setBoardAfterTick(), speed);
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
      setBoardToDefault();
      setSpeed(100);
      if (play) setPlay();
    }
  }, [reset, setReset, setBoardToDefault, setSpeed, play, setPlay]);

  return (
    <table>
      <tbody
        className="select-none border border-[#2b385c]"
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
        onMouseLeave={() => setMouseDown(false)}
      >
        {board.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <Cell
                key={`${i}-${j}`}
                i={i}
                j={j}
                cell={cell}
                border={border}
                mainColor={mainColor}
                handleChange={handleChange}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Board;
