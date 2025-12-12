import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad{
    sub: string
    admin?: "ADMIN"
}

export function isAdmin(){
    return(req: Request, res: Response, next: NextFunction) => {

        const authToken = req.headers.authorization;
    
        if(!authToken){
            return res.status(401).end()
        }
    
        const [, token] = authToken.split(" ")
    
        try {
    
            if(!token){
                return res.status(401).json({ error: "Token inválido" })
            }
    
            const { sub, admin } = verify(
                token,
                process.env.JWT_SECRET as string
            ) as PayLoad
    
            if(admin != "ADMIN"){
                return res.status(403).json({ error: "Acesso negado" })
            }
    
            req.user_id = sub;
    
            (req as any).user_admin = admin
    
            return next();
        } catch (err){
            return res.status(400).end()
        }
    }
}