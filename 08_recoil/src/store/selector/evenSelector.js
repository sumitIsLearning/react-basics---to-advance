import { counterAtom } from '../atoms/counterAtom'
import { selector } from 'recoil'

export const evenSelector = selector({
    key:"isEvenSelector",
    get:({get}) => {
        const currentCount = get(counterAtom);
        const isEven = (currentCount % 2 == 0); // it is even
        return isEven;
    }
})
