import prismaClient from "../../prisma"

interface AtendimentoRequest {
  setorUuid: string
}

class ReadAtendimentoService {
  async execute({ setorUuid }: AtendimentoRequest) {
    // Busca os prioritários
    const prioritarios = await prismaClient.atendimento.findMany({
      where: {
        fkSetor: setorUuid,
        prioridade: true
      },
      orderBy: { createdAt: "asc" }
    })

    // Busca os normais
    const normais = await prismaClient.atendimento.findMany({
      where: {
        fkSetor: setorUuid,
        prioridade: false
      },
      orderBy: { createdAt: "asc" }
    })

    // Tipagem explícita para o resultado
    type AtendimentoItem = typeof prioritarios[number]
    const resultado: AtendimentoItem[] = []

    let i = 0, j = 0

    while (i < prioritarios.length || j < normais.length) {
      if (i < prioritarios.length) {
        resultado.push(prioritarios[i]!) // non-null assertion
        i++
      }
      if (j < normais.length) {
        resultado.push(normais[j]!) // non-null assertion
        j++
      }
    }

    return resultado
  }
}

export { ReadAtendimentoService }