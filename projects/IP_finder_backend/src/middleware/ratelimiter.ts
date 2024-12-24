import { Request, Response, NextFunction } from "express";

interface IRequest {
    count: number,
    startTime: number
}


// Rate limiter middleware
function rateLimiter(maxRequests: number, windowMs: number) {
    const requestCounts = new Map<string, IRequest>(); // To store request counts

    return (req: Request, res: Response, next: NextFunction):void => {
        const userIP = req.ip || ""; // Use IP as the identifier
        const now = Date.now();
        try {
            // Initialize or update request data
            if (!requestCounts.has(userIP)) {
                requestCounts.set(userIP, { count: 1, startTime: now });
            } else {
                const requestData = requestCounts.get(userIP);

                if (!requestData) {
                    res.status(500).json({
                        error: "failed getting request data"
                    })
                    console.log(`Error while getting data`)
                    return;
                }

                // Reset the window if time exceeded
                if (now - requestData.startTime > windowMs) {
                    requestData.count = 1;
                    requestData.startTime = now;
                } else {
                    requestData.count++;
                }

                // Block request if limit exceeded
                if (requestData.count > maxRequests) {
                    res.status(429).json({
                        error: 'Too many requests, please try again later.',
                    });
                    return;
                }
            }

            next(); // Pass control to the next middleware
        } catch (error:any) {
            res.status(500).json({
                error: "Internal server Error"
            })
            console.log(`Error while getting data:${error.messgae}`)
            return;
        }

    };
}

export default rateLimiter;