import { Request, Response } from "express";
import { ReadPacienteService } from "../../services/paciente/ReadPacienteService";

class ReadPacienteController{
    async handle(req: Request, res: Response){
        const readPacienteService = new ReadPacienteService();

        const paciente = await readPacienteService.execute();

        return res.json(paciente)
    }
}

export { ReadPacienteController }