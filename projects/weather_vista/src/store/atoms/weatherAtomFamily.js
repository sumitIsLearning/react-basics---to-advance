import axios from 'axios'
import { atomFamily, selectorFamily } from 'recoil'

export const weatherAtomFamily = atomFamily({
    key:"weather",
    default: selectorFamily ({
        key: "weatherSelector/default",
        get: city => async ({get}) => {
            const res = await axios.get(`https://weather-vista-backend.onrender.com/weather/${city}`);
            return res.data;
        }
    })
})