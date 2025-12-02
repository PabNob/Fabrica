import prismaClient from "../../prisma"


interface ConfigRequest{
    parametro: string
    valor: string
}

class CreateConfigService{

    async execute({parametro, valor}:ConfigRequest){
        
        const configAlreadyExist = await prismaClient.configuracao.findFirst({
            where:{
                parametro: parametro,
                valor:valor
            }
        })

        if (configAlreadyExist){
            throw new Error("Já existe uma configuração semelhante!")
        }

        const config = await prismaClient.configuracao.create({
            data:{
                parametro: parametro,
                valor: valor
            }, 

            select:{
                id: true,
                parametro: true,
                valor: true,
                createdAt: true,
                updatedAt: false
            }
        })

        return config;

    };
}

export { CreateConfigService }