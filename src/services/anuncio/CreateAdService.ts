import prismaClient from "../../prisma";

interface AdRequest{
    titulo: string
    urlYoutube: string
    ativo: boolean
}

class CreateAdService{
    async execute({ titulo, urlYoutube, ativo }: AdRequest){

        const adAlreadyExist = await prismaClient.anuncio.findFirst({
            where:{
                urlYoutube: urlYoutube
            }
        })

        if(adAlreadyExist){
            throw new Error("Anúncio já existe")
        }

        const ad = await prismaClient.anuncio.create({
            data:{
                titulo: titulo,
                urlYoutube: urlYoutube,
                ativo: ativo
            }
        })

        return ad;
    }
}

export { CreateAdService }