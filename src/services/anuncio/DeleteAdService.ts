import prismaClient from "../../prisma"

interface AdRequest{
    adUuid: string
}

class DeleteAdService{
    async execute({adUuid}:AdRequest){

        const adExist = await prismaClient.anuncio.findUnique({
            where:{
                id: adUuid
            }
        })

        if(!adExist){
            throw new Error("Anúncio não encontrado")
        }

        const ad = await prismaClient.anuncio.delete({
            where:{
                id:adUuid
            }
        })

        return ad

    }
}

export { DeleteAdService }