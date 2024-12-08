import { create } from "zustand";

type RuleSet = number[];

type SettingsState = {
  rules: {
    becomesAlive: RuleSet;
    livesOn: RuleSet;
  };
  border: boolean;
  mainColor: string;
  setBecomesAlive: (rule: number) => void;
  setLivesOn: (rule: number) => void;
  setDefault: () => void;
  setVariant1: () => void;
  setVariant2: () => void;
  setVariant3: () => void;
  setBorder: () => void;
  setMainColor: (newColor: string) => void;
};
export const useSettings = create<SettingsState>((set) => ({
  rules: {
    becomesAlive: [3],
    livesOn: [2, 3],
  },
  border: true,
  mainColor: "#ffff00",
  setBecomesAlive: (rule) =>
    set((state) => ({
      rules: {
        ...state.rules,
        becomesAlive: state.rules.becomesAlive.includes(rule)
          ? state.rules.becomesAlive.filter((r) => r !== rule)
          : Array.from(new Set([...state.rules.becomesAlive, rule])),
      },
    })),
  setLivesOn: (rule) =>
    set((state) => ({
      rules: {
        ...state.rules,
        livesOn: state.rules.livesOn.includes(rule)
          ? state.rules.livesOn.filter((r) => r !== rule)
          : Array.from(new Set([...state.rules.livesOn, rule])),
      },
    })),
  setDefault: () =>
    set(() => ({
      rules: {
        becomesAlive: [3],
        livesOn: [2, 3],
      },
    })),
  setVariant1: () =>
    set(() => ({
      rules: {
        becomesAlive: [3],
        livesOn: [1, 3, 4],
      },
    })),
  setVariant2: () =>
    set(() => ({
      rules: {
        becomesAlive: [3, 5],
        livesOn: [1, 3, 4],
      },
    })),
  setVariant3: () =>
    set(() => ({
      rules: {
        becomesAlive: [2],
        livesOn: [1, 2, 3],
      },
    })),
  setBorder: () =>
    set((state) => ({
      border: !state.border,
    })),
  setMainColor: (newColor) => set({ mainColor: newColor }),
}));
