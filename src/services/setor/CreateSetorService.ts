import prismaClient from "../../prisma";


interface SetorRequest{
    nomeSetor: string
    isPrimeiroContato: boolean
}

class CreateSetorService{
    async execute({ nomeSetor, isPrimeiroContato }: SetorRequest){

        const setorAlreadyExist = await prismaClient.setor.findFirst({
            where:{
                nomeSetor: nomeSetor
            }
        })

        if(setorAlreadyExist){
            throw new Error("Setor já existe")
        }

        const setor = await prismaClient.setor.create({
            data:{
                nomeSetor: nomeSetor,
                isPrimeiroContato: isPrimeiroContato
            }
        })

        return setor;
    }
}

export { CreateSetorService }