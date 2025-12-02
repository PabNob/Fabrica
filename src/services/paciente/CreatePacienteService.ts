import prismaClient from "../../prisma"

interface PacienteRequest{
    nome: string
}

class CreatePacienteService{
    async execute({nome}: PacienteRequest){

        const pacienteExist = await prismaClient.paciente.findFirst({
            where:{
                nome: nome
            }
        })

        if(pacienteExist){
            throw new Error("Paciente já tem cadastro")
        }

        const paciente = await prismaClient.paciente.create({
            data:{
                nome
            }
        })

        return paciente
        
    }
}

export { CreatePacienteService }