// import ControllerAtendimento from "../controller/atendimento.js"
import AtendimentoRepository from "../repository/atendimento.js"

class ServiceAtendimento {

    async Buscar() {
        return AtendimentoRepository.Find()
    }

// ////////////////////////
   async Detalhe(id) {
    if (!id) {
        throw new Error("Favor informar o ID")
    }

    const atendimento = await AtendimentoRepository.FindById(it => it.id === id)

    if (!atendimento) {
        throw new Error(`ID ${id} do atendimento não encontrado`)
    }
    return atendimento
}

////////////////////////
  async Criar( nome, medico, data, hora, valor, pagamento) {
    if (
        !id
        || !nome
        || !medico
        || !data
        || !hora
        || !valor
        || !pagamento
    ) {
        throw new Error("Favor informar todas as informações")
    }
   const atendimento = await AtendimentoRepository.Create( nome, medico, data, hora, valor, pagamento )

    return atendimento 
}
////////////////////////
async Alterar(id, nome, medico, data, hora, valor, pagamento) {
    if (
        !id
        || !nome
        || !medico
        || !data
        || !hora
        || !valor
        || !pagamento
    ) {
        throw new Error("Favor informar os dados");
    }

    const atendimentoAlterado = await AtendimentoRepository.Update(id, nome, medico, data, hora, valor, pagamento)

    return atendimentoAlterado

  
    AtendimentoRepository[index] = {
        id: Number(id),
        nome,
        medico,
        data,
        hora,
        valor,
        pagamento
    };

    return AtendimentoRepository[index]
}
////////////////////////
    async Deletar(id) {
    if (!id) {
        throw new Error("Favor informar ID")
    }

    const atendimento = await AtendimentoRepository.Delete(id)


    return atendimento
}
////////////////////////

}

export default new ServiceAtendimento()