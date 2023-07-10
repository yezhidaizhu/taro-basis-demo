import { atom } from "recoil";

export const appAtom = atom({
  key: "app",
  default:{
    count: 0
  }
})