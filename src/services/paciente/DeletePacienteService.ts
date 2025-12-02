import prismaClient from "../../prisma"

interface PacienteRequest{
    pacienteUuid: string
}

class DeletePacienteService{
    async execute({ pacienteUuid }: PacienteRequest){

        const pacienteExist = await prismaClient.paciente.findUnique({
            where:{
                id: pacienteUuid
            }
        })

        if(!pacienteExist){
            throw new Error("Paciente não encontrado")
        }

        const paciente = await prismaClient.paciente.delete({
            where:{
                id: pacienteUuid
            }
        })

        return paciente
    }
}

export { DeletePacienteService }