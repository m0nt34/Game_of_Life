import { setBtnsAr } from "../data/settingsVariantButtons";
import { useSettings } from "../store/settings";

const Settings = () => {
  const {
    rules,
    setBecomesAlive,
    setLivesOn,
    border,
    setBorder,
    mainColor,
    setMainColor,
  } = useSettings();

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
                    id={`custom-checkbox-become-alive-${i}`}
                    className="hidden peer"
                    checked={rules.becomesAlive.includes(i)}
                    onChange={() => setBecomesAlive(i)}
                  />
                  <label
                    htmlFor={`custom-checkbox-become-alive-${i}`}
                    className="inline-block w-5 h-5 rounded cursor-pointer bg-[#4f5e88] peer-checked:bg-blue-500 transition-all"
                  ></label>
                </td>
              ))}
          </tr>
          <tr>
            <td className="align-top text-sm">lives on</td>
            {Array(9)
              .fill(null)
              .map((_, i) => {
                return (
                  <td key={i} className="text-center">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-stay-alive-${i}`}
                      className="hidden peer"
                      checked={rules.livesOn.includes(i)}
                      onChange={() => {
                        setLivesOn(i);
                      }}
                    />
                    <label
                      htmlFor={`custom-checkbox-stay-alive-${i}`}
                      className="inline-block items-center justify-center w-5 h-5 rounded cursor-pointer bg-[#4f5e88] peer-checked:bg-blue-500 transition-all"
                    ></label>
                  </td>
                );
              })}
          </tr>
        </tbody>
      </table>
      <div className="flex w-full gap-[5px]">
        {setBtnsAr.map((btn, i) => (
          <button
            key={i}
            onClick={btn.func}
            className="flex items-center justify-center bg-[#4f5e88] font-semibold text-sm rounded w-1/4 p-2 px-1 transition-opacity hover:opacity-85 active:opacity-80"
          >
            {btn.name}
          </button>
        ))}
      </div>
      <div className="flex w-full mt-2 gap-5">
        <div className="flex items-center justify-center gap-[6px]">
          <span>border</span>
          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              id="border-checkbox"
              className="hidden peer"
              checked={border}
              onChange={setBorder}
            />
            <label
              htmlFor="border-checkbox"
              className="inline-block w-5 h-5 rounded cursor-pointer bg-[#4f5e88] peer-checked:bg-blue-500 transition-all"
            ></label>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[6px]">
          <span>color</span>
          <div className="flex items-center justify-center">
            <input
              type="color"
              className="absolute top-[-60px] left-[-55px] w-0 h-0 opacity-0"
              id="color-input"
              defaultValue={mainColor}
              onChange={(e) => setMainColor(e.target.value)}
            />
            <label
              htmlFor="color-input"
              className="inline-block w-5 h-5 rounded cursor-pointer transition-all"
              style={{ backgroundColor: mainColor }}
            ></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
