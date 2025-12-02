import { Request, Response } from "express";
import { CreateAtendimentoService } from "../../services/atendimento/CreateAtendimentoService";

class CreateAtendimentoController{
    async handle(req: Request, res: Response){

        const { prioridade, atendimentoInfantil, pacienteUuid, atendenteUuid } = req.body

        const setorUuid = String(req.params.setorUuid)

        const createAtendimentoService = new CreateAtendimentoService()

        const atendimento = await createAtendimentoService.execute({
            prioridade,
            atendimentoInfantil,
            setorUuid,
            pacienteUuid,
            atendenteUuid
        })

        return res.json(atendimento)
    }
}

export { CreateAtendimentoController }