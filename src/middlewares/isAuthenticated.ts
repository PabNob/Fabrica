import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad{
    sub: string
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction){

    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ")

    if(!token){
        return res.status(401).json({
            error: "Token não fornecido corretamente"
        })
    }

    try{

        const { sub } = verify(
            token,
            process.env.JWT_SECRET as string
        ) as PayLoad;

       req.user_id = sub

        return next()
    } catch (err){
        return res.status(400).end()
    }

}