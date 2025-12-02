import prismaClient from "../../prisma"

class ReadConfigService{
    async execute(){
        const config = await prismaClient.configuracao.findMany();
        
        return config;
    }
}

export { ReadConfigService }