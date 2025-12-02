import prismaClient from "../../prisma"

class ReadPacienteService{
    async execute(){
        
        const paciente = await prismaClient.paciente.findMany()

        return paciente
    }
}

export { ReadPacienteService }