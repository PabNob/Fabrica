import prismaClient from "../../prisma"

class ReadAdService{
    async execute(){
        const ad = await prismaClient.anuncio.findMany();

        return ad;
    }
}

export { ReadAdService }