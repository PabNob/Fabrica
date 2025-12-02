import prismaClient from "../../prisma";

interface SetorRequest{
    setorUuid: string,
    nomeSetor?: string,
    isPrimeiroContato?: boolean
}

class UpdateSetorService{
    async execute({setorUuid, nomeSetor, isPrimeiroContato}:SetorRequest){
        
        const setorExist = await prismaClient.setor.findUnique({
            where:{
                id: setorUuid
            }
        })

        if(!setorExist){
            throw new Error("Setor não encontrado")
        }


        
        const data:{nomeSetor?: string, isPrimeiroContato?: boolean} = {}

        if(nomeSetor != undefined){
            data.nomeSetor = nomeSetor
        }

        if(isPrimeiroContato != undefined){
            data.isPrimeiroContato = isPrimeiroContato
        }

        if (Object.keys(data).length === 0) {
            throw new Error("Nenhum campo para atualizar foi informado.");
        }

        const setor = await prismaClient.setor.update({
            where:{
                id: setorUuid
            }, 
            
            data
        })

        return setor;

    }
}

export { UpdateSetorService }