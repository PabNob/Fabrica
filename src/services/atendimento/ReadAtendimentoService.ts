import prismaClient from "../../prisma"

interface AtendimentoRequest{
    setorUuid: string
}
class ReadAtendimentoService{
    async execute({ setorUuid }: AtendimentoRequest){
        
        const atendimento = await prismaClient.atendimento.findMany({
            where:{
                fkSetor: setorUuid
            }
        })

        return atendimento
    }
}   

export { ReadAtendimentoService }