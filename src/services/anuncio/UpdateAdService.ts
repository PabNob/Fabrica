import prismaClient from "../../prisma"

interface AdRequest{
    adUuid: string,
    titulo?: string,
    urlYoutube?: string,
    ativo?: boolean
}

class UpdateAdService{
    async execute({adUuid, titulo, urlYoutube, ativo}:AdRequest){

        const adFound = await prismaClient.anuncio.findUnique({
            where:{
                id: adUuid
            }
        })

        if (!adFound){
            throw new Error("Anúncio não encontrado")
        }

        const data:{titulo?:string, urlYoutube?:string, ativo?: boolean} = {}

        if(titulo != undefined){
            data.titulo = titulo
        }

        if(urlYoutube != undefined){
            data.urlYoutube = urlYoutube
        }

        if(ativo != undefined){
            data.ativo = ativo
        }

        if (Object.keys(data).length === 0) {
            throw new Error("Nenhum campo para atualizar foi informado.");
        }

        const ad = await prismaClient.anuncio.update({
            where:{
                id: adUuid
            },

            data
        })
    
        return ad
    }
}

export { UpdateAdService }