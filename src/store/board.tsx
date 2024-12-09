import { create } from "zustand";
import { twoDArray } from "../data/2dArray";
import { countLiveNeighbors } from "../utils/countLiveNeighbors ";
import { useSettings } from "./settings";

type boardState = {
  board: boolean[][];
  setBoard: (newBoard: boolean[][]) => void;
  setBoardCell: (i: number, j: number) => void;
  setBoardToDefault: () => void;
  setBoardAfterTick: () => void;
};
export const useBoard = create<boardState>((set) => ({
  board: twoDArray(),
  setBoard: (newBoard) => set({ board: newBoard }),
  setBoardCell: (i, j) => {
    set((state) => {
      const newBoard = [...state.board];
      newBoard[i] = [...newBoard[i]];  
      newBoard[i][j] = !newBoard[i][j];
      return { board: newBoard };
    });
  },
  setBoardToDefault: () => set({ board: twoDArray() }),
  setBoardAfterTick: () =>
    set((state) => {
      const newBrd = twoDArray();
      state.board.map((row, i) =>
        row.map((cell, j) => {
          const count = countLiveNeighbors(state.board, i, j);
          newBrd[i][j] =
            (cell && useSettings.getState().rules.livesOn.includes(count)) ||
            (!cell &&
              useSettings.getState().rules.becomesAlive.includes(count));
        })
      );
      return { board: newBrd };
    }),
}));
