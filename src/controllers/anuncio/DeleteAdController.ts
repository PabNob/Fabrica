import { Request, Response } from "express";
import { DeleteAdService } from "../../services/anuncio/DeleteAdService";

class DeleteAdController{
    async handle(req: Request, res: Response){
        
        const adUuid = String(req.params.anuncioUuid);

        if(!adUuid){
            throw new Error("Identificador inválido")
        }

        const deleteAdService = new DeleteAdService();

        const ad = await deleteAdService.execute({
            adUuid
        })

        return res.json(ad)
    }
}

export { DeleteAdController }