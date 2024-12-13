import { atomFamily, selectorFamily } from 'recoil'

export const todoAtomFamily2 = atomFamily({
    key:"todoAtomFamily2",
    default: selectorFamily({
        key:"todoSelectorFamily",
        get: (id) => async () => {
            await new Promise((res , rej) => setTimeout(res , 5000));
            const res = await fetch(`https://www.dontHaveAPI.com/todo/${id}`);
            return await res.json();
        }
    })
}) 