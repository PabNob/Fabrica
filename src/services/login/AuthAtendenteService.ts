import { compare } from "bcryptjs";
import prismaClient from "../../prisma"
import { sign } from "jsonwebtoken";

interface AuthRequest{
    login: string,
    senha: string
}

class AuthAtendenteService{
    async execute({login, senha}:AuthRequest){

        const atendente = await prismaClient.atendente.findFirst({
            where:{
                login: login
            }
        })

        if(!atendente){
            throw new Error("Falha no login")
        }

        const passwordComparator = await compare(senha, atendente.senha);

        if(!passwordComparator){
            throw new Error("Falha no login")
        }

        const token = sign(
            {
                nome: atendente.nome,
                login: atendente.login,
                admin: atendente.admin
            },

            process.env.JWT_SECRET as string,

            {
                subject: atendente.id.toString(),

                expiresIn: '30d'
            }
        )

        return {
            id: atendente.id,
            nome: atendente.nome,
            login: atendente.login,
            admin: atendente.admin,
            token
        }

    }
}

export { AuthAtendenteService }