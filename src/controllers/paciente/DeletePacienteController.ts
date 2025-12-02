import { Request, Response } from "express";
import { DeletePacienteService } from "../../services/paciente/DeletePacienteService";

class DeletePacienteController{
    async handle(req: Request, res: Response){

        const pacienteUuid = String(req.params.pacienteUuid)

        const deletePacienteService = new DeletePacienteService()

        const paciente = await deletePacienteService.execute({
            pacienteUuid
        })

        return res.json(paciente)
    }
}

export { DeletePacienteController }