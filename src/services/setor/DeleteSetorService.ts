import prismaClient from "../../prisma"

interface SetorRequest{
    setorUuid: string, 
    
}

class DeleteSetorService{
    async execute({setorUuid}:SetorRequest){
        
        const setorExist = await prismaClient.setor.findUnique({
            where:{
                id: setorUuid
            }
        })

        if(!setorExist){
            throw new Error("Setor não encontrado")
        }

        const setor = await prismaClient.setor.delete({
            where:{
                id: setorUuid
            }
        })

        return setor;

    }
}

export { DeleteSetorService }