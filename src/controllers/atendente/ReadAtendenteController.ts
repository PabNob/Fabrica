import { Request, Response } from "express";
import { ReadAtendenteService } from "../../services/atendente/ReadAtendenteService";

class ReadAtendenteController{
    async handle(req: Request, res: Response){

        
        const readAtendenteService = new ReadAtendenteService();

        const atendente = await readAtendenteService.execute();

        return res.json(atendente);
    }
}

export { ReadAtendenteController }