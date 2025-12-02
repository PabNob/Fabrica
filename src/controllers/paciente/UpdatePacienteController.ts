import { Request, Response } from "express";
import { UpdatePacienteService } from "../../services/paciente/UpdatePacienteService";

class UpdatePacienteController{
    async handle(req: Request, res: Response){

        const {nome} = req.body;

        const pacienteUuid = String(req.params.pacienteUuid)
        
        const updatePatientService = new UpdatePacienteService();

        const paciente = await updatePatientService.execute({
            nome,
            pacienteUuid
        })

        return res.json(paciente)
    }
}

export { UpdatePacienteController }