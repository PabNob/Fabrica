import { Request, Response } from "express";
import { CreateAdService } from "../../services/anuncio/CreateAdService";

class CreateAdController {
    async handle(req: Request, res: Response){

        const {titulo, urlYoutube, ativo} = req.body;

        const createAdService = new CreateAdService();

        const ad = await createAdService.execute({
            titulo,
            urlYoutube,
            ativo
        });

        return res.json(ad);
    }
}

export { CreateAdController }