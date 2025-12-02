import { Request, Response } from "express";
import { ReadAdService } from "../../services/anuncio/ReadAdService";

class ReadAdController{
    async handle(req: Request, res: Response){
        
        const readAdService = new ReadAdService();

        const ad = await readAdService.execute();

        return res.json(ad);

    }
}

export { ReadAdController }