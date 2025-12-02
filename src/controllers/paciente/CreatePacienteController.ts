import { Request, Response } from "express";
import { CreatePacienteService } from "../../services/paciente/CreatePacienteService";

class CreatePacienteController{
    async handle(req: Request, res: Response){

        const { nome } = req.body;

        const createPacienteService = new CreatePacienteService();

        const paciente = await createPacienteService.execute({
            nome
        })

        return res.json(paciente)
    }
}

export { CreatePacienteController }