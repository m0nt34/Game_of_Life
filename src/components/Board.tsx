import { useEffect, useRef, useState } from "react";
import { countLiveNeighbors } from "../utils/countLiveNeighbors ";
import { useButtons } from "../store/btns";
import { twoDArray } from "../data/2dArray";
const Board = () => {
  const { play, setPlay, reset, setReset, speed, setSpeed } = useButtons();
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
      setBoard((prev) => {
        const newBoard = [...prev];
        for (let i = 0; i < prev.length; i++) {
          newBoard[i] = [...prev[i]];
          for (let j = 0; j < prev[i].length; j++) {
            const count = countLiveNeighbors(prev, i, j);
            if (count <= 1 && prev[i][j]) {
              newBoard[i][j] = false;
            } else if (count >= 4 && prev[i][j]) {
              newBoard[i][j] = false;
            } else if (
              (count === 2 && prev[i][j]) ||
              (count === 3 && prev[i][j])
            ) {
              newBoard[i][j] = true;
            } else if (count === 3 && !prev[i][j]) {
              newBoard[i][j] = true;
            }
          }
        }
        return newBoard;
      });
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
      startLife();
    } else {
      endLife();
    }
    return () => {
      endLife();
    };
  }, [play]);
  useEffect(() => {
    if (reset) {
      setReset();
      setBoard(twoDArray);
      setSpeed(100);
      if (play) {
        setPlay();
      }
    }
  }, [reset]);
  useEffect(() => {
    if (play) {
      endLife();
      startLife();
    }
  }, [speed]);
  return (
    <table>
      <tbody
        className="select-none "
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
        onMouseLeave={() => setMouseDown(false)}
      >
        {Board.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td
                onMouseEnter={() => handleChange(i, j, false)}
                onClick={() => handleChange(i, j, true)}
                className="h-[10px] w-[10px] border-[1px] border-[#2b385c]"
                key={`${i}-${j}`}
                style={{ backgroundColor: cell ? "#ffff00" : "transparent" }}
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
