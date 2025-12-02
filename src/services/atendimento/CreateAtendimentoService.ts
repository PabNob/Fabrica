import prismaClient from "../../prisma"
import { CreateTicket } from "./Ticket/CreateTicket"

interface AtendimentoRequest{
    prioridade: boolean
    atendimentoInfantil: boolean

    setorUuid: string
    pacienteUuid: string
    atendenteUuid: string

}

class CreateAtendimentoService{
    async execute({prioridade, atendimentoInfantil, setorUuid, pacienteUuid, atendenteUuid}: AtendimentoRequest){
        
        const setor = await prismaClient.setor.findUnique({
            where:{
                id: setorUuid
            }
        })
        
        if(!setor){
            throw new Error("Setor não encontrado")
        }

        const atendente = await prismaClient.atendente.findUnique({
            where:{
                id: atendenteUuid
            }
        })

        if(!atendente){
            throw new Error("Atendente não encontrado")
        }
        
        const createTicket = new CreateTicket()

        const ticket = await createTicket.execute({setorUuid})

        const atendimento = await prismaClient.atendimento.create({
            data:{
                ticket,
                atendimentoInfantil,
                prioridade,
                status: "FILA",

                fkAtendente: atendenteUuid,
                fkPaciente: pacienteUuid,
                fkSetor: setorUuid
            }
        })

        return atendimento
    }
}

export { CreateAtendimentoService }