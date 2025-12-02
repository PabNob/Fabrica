import prismaClient from "../../../prisma"

interface TicketRequest{
    setorUuid: string
}

class CreateTicket{
    async execute({ setorUuid }: TicketRequest){

        const setor = await prismaClient.setor.findUnique({
            where:{
                id: setorUuid
            }
        })

        if(!setor){
            throw new Error('Setor inválido')
        }

        // Reset de senha por dia

        const hoje = new Date()

        const inicio = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate())

        const fim = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + 1)

        //criar logica do ticket puxando o lenth de pacientes por setor
        const inicialSetor = setor.nomeSetor.charAt(0).toUpperCase();

        const contador = await prismaClient.atendimento.count({
            where:{
                fkSetor: setorUuid,
                createdAt: {
                    gte: inicio,
                    lt: fim
                }
            }, 
            
        })

        const ticket = `${inicialSetor}-${String(contador+1).padStart(3,"0")}`


        return ticket
    }
}

export {CreateTicket}