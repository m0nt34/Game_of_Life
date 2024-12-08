import { useSettings } from "../store/settings";

type ButtonConfig = {
  func: () => void;
  name: string;
};

export const setBtnsAr: ButtonConfig[] = [
  {
    func: useSettings.getState().setDefault,
    name: "DEFAULT",
  },
  {
    func: useSettings.getState().setVariant1,
    name: "VARIANT 1",
  },
  {
    func: useSettings.getState().setVariant2,
    name: "VARIANT 2",
  },
  {
    func: useSettings.getState().setVariant3,
    name: "VARIANT 3",
  },
];
