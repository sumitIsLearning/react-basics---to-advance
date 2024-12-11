import { selector } from "recoil";
import { userAtom } from "../atoms/userAtom";

export const userNameSelector = selector({
    key:"name",
    get:({get}) => {
        const users = get(userAtom);
        const names = users.map(user => user.name)
        return names;
    }
}) 