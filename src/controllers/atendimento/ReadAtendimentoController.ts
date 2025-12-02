import { Request, Response } from "express";
import { ReadAtendimentoService } from "../../services/atendimento/ReadAtendimentoService";

class ReadAtendimentoController{
    async handle(req: Request, res: Response){

        const setorUuid = String(req.params.setorUuid)

        const readAtendimentoService = new ReadAtendimentoService()

        const atendimento = await readAtendimentoService.execute({
            setorUuid
        })

        return res.json(atendimento)
    }
}

export { ReadAtendimentoController }