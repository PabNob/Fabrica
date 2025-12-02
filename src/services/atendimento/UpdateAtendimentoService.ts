import { StatusPaciente } from "@prisma/client"
import prismaClient from "../../prisma"

interface AtendimentoRequest{
    atendimentoUuid: string
    setorUuid: string

    status: StatusPaciente
}

class UpdateAtendimentoService{
    async execute({ atendimentoUuid, setorUuid, status }:AtendimentoRequest){

        if(atendimentoUuid == undefined){
            throw new Error("Atendimento não encontrado")
        }

        const setor = await prismaClient.setor.findUnique({
            where:{
                id: setorUuid
            }
        })

        if(!setor){
            throw new Error("Setor não encontrado")
        }

        const data:{fkSetor?: string, status?: StatusPaciente} = {}

        if(setorUuid != undefined){
            data.fkSetor = setorUuid
        }

        if(status != undefined){
            data.status = status
        }

        const atendimento = await prismaClient.atendimento.update({
            where:{
                id: atendimentoUuid
            },
            data
        })

        return atendimento

    }
}

export { UpdateAtendimentoService }