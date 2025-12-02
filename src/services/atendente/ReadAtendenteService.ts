import prismaClient from "../../prisma"

class ReadAtendenteService{
    async execute(){

        
        const atendente = await prismaClient.atendente.findMany();

        return atendente;

    }
}

export { ReadAtendenteService }