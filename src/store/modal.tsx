import { create } from "zustand";

type ModalState = {
  modal: boolean;
  setModal: () => void;
};

export const useModal = create<ModalState>((set) => ({
  modal: false,
  setModal: () => set((state) => ({ modal: !state.modal })),
}));
