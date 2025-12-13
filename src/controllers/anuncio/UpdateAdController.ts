import { Request, Response } from "express";
import { UpdateAdService } from "../../services/anuncio/UpdateAdService";

class UpdateAdController {
    async handle(req: Request, res: Response){

        const adUuid = String(req.params.anuncioUuid);

        const {titulo, urlYoutube, ativo} = req.body;

        if(!adUuid){
            throw new Error("Identificador inválido")
        }

        const updateAdService = new UpdateAdService();

        const ad = await updateAdService.execute({
            adUuid,
            titulo,
            urlYoutube,
            ativo
        })

        return res.json(ad)
    }
}

export { UpdateAdController }