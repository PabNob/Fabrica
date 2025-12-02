import prismaClient from "../../prisma"

interface AtendenteRequest{
    atendenteUuid: string
}

class DeleteAtendenteService{
    async execute({atendenteUuid}:AtendenteRequest){

        const atendenteExist = await prismaClient.atendente.findUnique({
            where:{
                id: atendenteUuid
            }
        })

        if(!atendenteExist){
            throw new Error("Atendente não encontrado")
        }

        const atendente = await prismaClient.atendente.delete({
            where:{
                id: atendenteUuid
            }
        })

        return atendente;
    }
}

export { DeleteAtendenteService }