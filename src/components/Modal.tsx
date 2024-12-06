import { ReactNode } from "react";
import { useModal } from "../store/modal";

type prop = {
  children: ReactNode;
};
const Modal = ({ children }: prop) => {
  const { modal, setModal } = useModal();

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        modal ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        className={`bg-[#2b385c] shadow p-6 transition-all ${
          modal ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
