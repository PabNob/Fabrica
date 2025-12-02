import prismaClient from "../../prisma"

interface ConfigRequest{
    configUuid: string
}

class DeleteConfigService{
    async execute({configUuid}:ConfigRequest){

        const configExist = await prismaClient.configuracao.findUnique({
            where:{
                id: configUuid
            }
        })

        if (!configExist){
            throw new Error("Configuração não encontrada")
        }

        const config = await prismaClient.configuracao.delete({
            where:{
                id: configUuid
            }
        })

        return config;
    }
}

export { DeleteConfigService }