import { Dispatch, ReactNode, SetStateAction } from "react";
import X from "../assets/icons/X";

type prop = {
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
};
const Modal = ({ children, open, setOpen, title }: prop) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
      onClick={() => setOpen(false)}
    >
      <div
        className={`bg-[#2b385c] shadow p-6 transition-all max-w-[400px] w-full rounded-lg ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center w-full">
          <h1 className="text-[22px] font-semibold">{title}</h1>
          <button onClick={() => setOpen(false)}>
            <X className="h-7 w-7 sm850:h-5 sm850:w-5 sm450:w-[15px] sm450:h-[15px]" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
