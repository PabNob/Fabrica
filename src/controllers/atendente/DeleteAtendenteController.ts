import { Request, Response } from "express";
import { DeleteAtendenteService } from "../../services/atendente/DeleteAtendenteService";

class DeleteAtendenteController{
    async handle(req: Request, res: Response){

        const atendenteUuid = String(req.params.atendenteUuid);

        
        const deleteAtendenteService = new DeleteAtendenteService();

        const atendente = await deleteAtendenteService.execute({
            atendenteUuid
        });

        return res.json(atendente);
    }
}

export { DeleteAtendenteController }