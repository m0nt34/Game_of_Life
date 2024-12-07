import React from "react";

const Settings = () => {
  return (
    <div className="flex flex-col mt-2 select-none">
      <table>
        <thead>
          <tr>
            <th className="font-semibold text-lg text-center"></th>
            {Array(9)
              .fill(null)
              .map((_, i) => (
                <th
                  key={i}
                  className="font-semibold text-lg text-center align-middle"
                >
                  {i}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="align-top text-sm">becomes alive</td>
            {Array(9)
              .fill(null)
              .map((_, i) => (
                <td key={i} className="text-center">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-become-alive${i}`}
                    className="hidden peer"
                  />
                  <label
                    htmlFor={`custom-checkbox-become-alive${i}`}
                    className="inline-block w-5 h-5 rounded cursor-pointer bg-[#4f5e88] peer-checked:bg-blue-500 transition-all"
                  ></label>
                </td>
              ))}
          </tr>
          <tr>
            <td className="align-top text-sm">lives on</td>
            {Array(9)
              .fill(null)
              .map((cell, i) => {
                return (
                  <td key={i} className="text-center">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-stay-alive${i}`}
                      className="hidden peer"
                    />
                    <label
                      htmlFor={`custom-checkbox-stay-alive${i}`}
                      className="inline-block items-center justify-center w-5 h-5 rounded cursor-pointer bg-[#4f5e88] peer-checked:bg-blue-500 transition-all"
                    ></label>
                  </td>
                );
              })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Settings;
