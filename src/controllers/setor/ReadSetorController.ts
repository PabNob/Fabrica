import { Request, Response } from "express";
import { ReadSetorService } from "../../services/setor/ReadSetorService";

class ReadSetorController{
    async handle(req: Request, res: Response){

        const readSetorService = new ReadSetorService();

        const setor = await readSetorService.execute();

        return res.json(setor);
    }
}

export { ReadSetorController }