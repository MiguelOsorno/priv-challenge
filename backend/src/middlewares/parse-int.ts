import { Response, Request, NextFunction } from "express";

export  function parseQuery (req: Request, res: Response, next: NextFunction){
    const queryStrings: any = req.query;

    for(const key in queryStrings){
        const length = queryStrings[key].length;
        const isValid = length > 20 ? false : !isNaN(parseInt(queryStrings[key]));

        if(isValid){
            queryStrings[key] = parseInt(queryStrings[key]);
        }
        else{
            return res.status(400).json({
                message: `${ queryStrings[key] } debe ser un numero`
            })
        }
    }

    req.query = queryStrings;
    next();
};