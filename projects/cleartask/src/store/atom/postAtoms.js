import axios from 'axios'
import { atomFamily, selectorFamily } from 'recoil'

export const postAtoms = atomFamily({
    key:"posts",
    default: selectorFamily({
        key:"posts/default",
        get: id => async ({get}) => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            return res.data
        }
    })
})
