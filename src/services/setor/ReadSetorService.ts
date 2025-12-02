import prismaClient from "../../prisma";

class ReadSetorService {
    async execute(){

        const setor = await prismaClient.setor.findMany()

        return setor;
    }
}

export { ReadSetorService }