import { atomFamily, selectorFamily } from 'recoil'
import todo from '../../utils/mockUpData'
import { useEffect } from 'react'

export const postFamilyAtom = atomFamily({
    key:"postFamily",
    default: selectorFamily({
        key: "postSelector",
        get: (id) => async ({get}) => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const content = await response.json();
            return content;
        }
    })
}) 
