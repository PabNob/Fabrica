import { hash } from "bcryptjs"
import prismaClient from "../../prisma"
import { ROLE } from "@prisma/client"

interface AtendenteRequest{
    nome: string,
    login: string,
    senha: string,
    ativo: boolean,
    admin?: ROLE,

    setorUuid: string
}

class CreateAtendenteService{
    async execute({ login, senha, nome, ativo, admin, setorUuid }: AtendenteRequest){

        if( !login || !senha || !nome || !ativo || !setorUuid){
            throw new Error("Campos faltando")
        }

        const atendenteAldeadyExist = await prismaClient.atendente.findFirst({
            where:{
                nome: nome
            }
        })

        if(atendenteAldeadyExist){
            throw new Error("Atendente já cadastrado")
        }

        const setorIsValid = await prismaClient.setor.findUnique({
            where:{
                id: setorUuid
            }
        })

        if(!setorIsValid){
            throw new Error("Setor inválido")
        }

        const hashPassword = await hash(senha, 8)

        const atendente = await prismaClient.atendente.create({
            data:{
                login: login,
                senha: hashPassword,
                nome: nome,
                ativo: ativo,
                admin: admin ?? null,
                fkSetor: setorUuid
            }
        })

        return atendente;

    }
}

export { CreateAtendenteService }