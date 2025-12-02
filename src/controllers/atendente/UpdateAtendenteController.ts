import { Request, Response } from "express";
import { UpdateAtendenteService } from "../../services/atendente/UpdateAtendenteService";

class UpdateAtendenteController{
    async handle(req: Request, res: Response){

        const atendenteUuid = String(req.params.atendenteUuid);

        const { nome, login, senha, ativo } = req.body;



        const updateAtendenteService = new UpdateAtendenteService();

        const atendente = await updateAtendenteService.execute({
            atendenteUuid,
            nome, 
            login,
            senha,
            ativo
        })

        return res.json(atendente)
    }
}

export { UpdateAtendenteController }