import { Request, Response } from "express";
import { DeleteSetorService } from "../../services/setor/DeleteSetorService";

class DeleteSetorController{
    async handle(req: Request, res: Response){

        const setorUuid = String(req.params.id)

        const deleteSetorService = new DeleteSetorService();

        const setor =  await deleteSetorService.execute({
            setorUuid
        })

        return res.json(setor)
    }
}

export { DeleteSetorController }