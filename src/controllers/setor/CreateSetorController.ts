import { Request, Response } from "express";
import { CreateSetorService } from "../../services/setor/CreateSetorService";


class CreateSetorController{
    async handle(req: Request, res: Response){

        const { nomeSetor, isPrimeiroContato } = req.body;

        const createSetorService = new CreateSetorService();

        const sector = await createSetorService.execute({
            nomeSetor,
            isPrimeiroContato
        })

        return res.json(sector); 
    }
}

export { CreateSetorController }