import { memo } from "react";
type CellProps = {
  i: number;
  j: number;
  cell: boolean;
  border: boolean;
  mainColor: string;
  handleChange: (i: number, j: number, click: boolean) => void;
};

const Cell = ({ i, j, cell, border, mainColor, handleChange }: CellProps) => {
  const cellColor = cell ? mainColor : "transparent";
  const cellClasses = `w-[10px] h-[10px] ${
    border ? "border border-[#2b385c]" : ""
  } 
    sm850:w-2 sm850:h-2 
    sm650:w-[6px] sm650:h-[6px] 
    sm450:w-[4.5px] sm450:h-[4.5px]`;

  return (
    <td
      onMouseEnter={() => handleChange(i, j, false)}
      onMouseDown={() => handleChange(i, j, true)}
      className={cellClasses}
      style={{ backgroundColor: cellColor }}
      draggable={false}
    ></td>
  );
};
export default memo(Cell);
