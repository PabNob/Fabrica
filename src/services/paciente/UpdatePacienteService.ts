import prismaClient from "../../prisma"

interface PacienteRequest{
    pacienteUuid: string
    nome?: string | undefined
}

class UpdatePacienteService{
    async execute({ nome, pacienteUuid }: PacienteRequest){

        const pacienteExist = await prismaClient.paciente.findUnique({
            where:{
                id: pacienteUuid
            }
        })

        if(!pacienteExist){
            throw new Error("Paciente não encontrado")
        }

        const data:{nome?:string} = {}

        if(nome != undefined){
            data.nome = nome
        }

        if (Object.keys(data).length === 0) {
            throw new Error("Nenhum campo para atualizar foi informado.");
        }

        const paciente = await prismaClient.paciente.update({
            where:{
                id: pacienteUuid
            },

            data
        })

        return paciente
    }

}

export { UpdatePacienteService }