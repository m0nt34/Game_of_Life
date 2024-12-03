import { create } from "zustand";

type ButtonsState = {
  play: boolean;
  reset: boolean;
  speed: number;
  setPlay: () => void;
  setReset: () => void;
  setSpeed: (newSpeed: number) => void;
};

export const useButtons = create<ButtonsState>((set) => ({
  play: false,
  reset: false,
  speed: 100,
  setPlay: () => set((state) => ({ play: !state.play })),
  setReset: () => set((state) => ({ reset: !state.reset })),
  setSpeed: (newSpeed: number) => set({ speed: newSpeed }),
}));
