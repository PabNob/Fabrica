import { Request, Response } from "express";
import { UpdateAtendimentoService } from "../../services/atendimento/UpdateAtendimentoService";

class UpdateAtendimentoController{
    async handle(req: Request, res: Response){

        const { status } = req.body;

        const setorUuid = String(req.params.setorUuid);

        const atendimentoUuid = String(req.params.atendimentoUuid);

        const updateAtendimentoService = new UpdateAtendimentoService();

        const atendimento = await updateAtendimentoService.execute({
            setorUuid,
            atendimentoUuid,
            status
        })

        return res.json(atendimento)

    }
}

export { UpdateAtendimentoController }