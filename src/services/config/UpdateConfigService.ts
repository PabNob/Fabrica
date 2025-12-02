import prismaClient from "../../prisma"

interface ConfigRequest{
    configUuid: string
    parametro?: string
    valor?: string
}

class UpdateConfigService {
    async execute({configUuid, parametro, valor}:ConfigRequest){

        const configFound = await prismaClient.configuracao.findUnique({
            where:{
                id: configUuid
            }
        })

        if (!configFound){
            throw new Error("Configuração não encontrada...")
        }

        const data:{ parametro?: string, valor?: string } = {}
        
        if(parametro != undefined){
            data.parametro = parametro
        }
        
        if(valor != undefined){
            data.valor = valor
        }

        if(Object.keys(data).length === 0){
            throw new Error("Não foi informado algo para atualizar")
        }

        const config = await prismaClient.configuracao.update({
            where: {
                id: configUuid
            },
            data
        })

        return config;
    }
}

export { UpdateConfigService }