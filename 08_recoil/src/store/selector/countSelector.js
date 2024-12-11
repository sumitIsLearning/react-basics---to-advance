import { counterAtom } from '../atoms/counterAtom'
import { selector } from 'recoil'

export const countSelector = selector({
    key:"countSelector",
    get:({get}) => {
        const count = get(counterAtom);
        return count;
    }
})