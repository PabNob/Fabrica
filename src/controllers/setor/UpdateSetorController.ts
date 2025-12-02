import { Request, Response } from "express";
import { UpdateSetorService } from "../../services/setor/UpdateSetorService.ts";

class UpdateSetorController{
    async handle(req: Request, res: Response){

        // Necessário o trecho String pra que o uuid não seja undefined
        const setorUuid = String(req.params.id);

        const {nomeSetor, isPrimeiroContato} = req.body;

        const updateSetorService = new UpdateSetorService();

        const sector = await updateSetorService.execute({
            setorUuid,
            nomeSetor,
            isPrimeiroContato
        })

        return res.json(sector)
    }
}

export { UpdateSetorController }