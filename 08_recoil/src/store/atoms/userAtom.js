import { atom } from "recoil";

export const userAtom = atom({
  key: "users",
  default: [
    {
      name: "sumit",
      age: 21,
      phone: "9999999999",
    },
    {
        name:"joy",
        age:20,
        phone:"9090909090"
    },
  ],
});
