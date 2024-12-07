import { ReactNode, useState } from "react";
import Modal from "./Modal";

type props = {
  Icon: ReactNode;
  element: ReactNode;
  title: string;
};
const ButtonModal = ({ Icon, element, title }: props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className="flex items-center justify-between bg-[#2b385c] rounded-lg sm850:rounded-md sm650:rounded-[5px] sm450:rounded-1 outline-none p-3 sm850:p-2 sm450:p-[5px] text-white font-semibold text-2xl sm850:text-[18px] sm450:text-[12px] transition-opacity hover:opacity-90 active:opacity-80"
      >
        {Icon}
      </button>
      <Modal open={open} setOpen={setOpen} title={title}>
        {element}
      </Modal>
    </div>
  );
};

export default ButtonModal;
