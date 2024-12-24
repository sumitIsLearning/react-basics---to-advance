import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import rateLimiter from './middleware/ratelimiter';
import axios from 'axios';
import requestIP from 'request-ip';

dotenv.config()
const app = express();
const port: string = process.env.PORT || "";
const GEOAPIFY_API_KEY = process.env.GEOAPIFY_API_KEY


app.use(cors());
app.use(rateLimiter(5, (60 * 1000)));

app.get('/findIP/:city', async (req: Request, res: Response) => {
    const city: string = req.params.city;
    const ip = requestIP.getClientIp(req);
    try {
        if (!city) {
            res.status(400).json({
                error: "city is required"
            })
        }

        const geoResponse:any= await axios.get(
            `https://api.geoapify.com/v1/geocode/search?text=${city}&apiKey=${GEOAPIFY_API_KEY}`
        );

        if (geoResponse.data === 'undefined') {
            res.status(500).json({ error: "something went wrong" });
            return;
        }

        const [lon, lat] = geoResponse.data.features[0].geometry.coordinates;

        res.status(200).json({
            longitude:`${lon.toFixed(6)}`,
            latitude:`${lat.toFixed(6)}`,
            ip
        })

    } catch (error:any) {
        res.status(500).json({
            error: `Internal server Error:please wait...`
        });
        console.error(`Error Occured while fetching data:${error.message}`);
        return;
    }
})


app.listen(port, () => {
    console.log(`server running on: http://localhost:${port}`);
})
