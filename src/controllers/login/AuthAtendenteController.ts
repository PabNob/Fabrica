import { Request, Response } from "express";
import { AuthAtendenteService } from "../../services/login/AuthAtendenteService";

class AuthAtendenteController{
    async handle(req: Request, res: Response){
        const {login, senha} = req.body;

        const authAtendenteService = new AuthAtendenteService()

        const auth = await authAtendenteService.execute({
            login,
            senha
        })

        return res.json(auth)
    }
}

export { AuthAtendenteController }