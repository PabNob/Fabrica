import { hash } from "bcryptjs"
import prismaClient from "../../prisma"

interface AtendenteRequest{
    atendenteUuid: string,
    nome?: string,
    login?: string,
    senha?: string,
    ativo?: boolean,
}

class UpdateAtendenteService{
    async execute({ atendenteUuid, nome, login, senha, ativo }:AtendenteRequest){

        const atendenteFound = await prismaClient.atendente.findFirst({
            where:{
                id: atendenteUuid
            }
        })

        if(!atendenteFound){
            throw new Error("Atendente não encontrado")
        }

        const data:{nome?: string, login?: string, senha?: string, ativo?: boolean} = {};

        if(nome != undefined){
            data.nome = nome
        }

        if(login != undefined){
            data.login = login
        }
        
        if(senha != undefined){

            const hashPassword = await hash(senha, 8)

            data.senha = hashPassword
        }

        if(ativo != undefined){
            data.ativo = ativo
        }

        if(Object.keys(data).length === 0){
            throw new Error("Não foi informado algo para atualizar")
        }

        const atendente = await prismaClient.atendente.update({
            where:{
                id: atendenteUuid
            },
            data
        })

        return atendente;


    }
}

export { UpdateAtendenteService }