import atendimento from "../model/atendimento.js"
import ServiceAtendimento from "../service/atendimento.js"

class AtendimentoRepository{

    async Find(_,res){
        
       const atendimento = await ServiceAtendimento.FindAll()
       
       return atendimento

    }

    async FindById(id) {
        const atendimentoDetalhes = await atendimento.FindByPk(id)

        return atendimentoDetalhes
    }


    async Create( nome, medico, data, hora, valor, pagamento) {

        const atendimentoCreate = await atendimento.create({ nome, medico, data, hora, valor, pagamento})

        return atendimentoCreate

    }

    async Update(id, nome, medico, data, hora, valor, pagamento){

    const atendimentoAlterar = await atendimento.findByPk(id)

        if(!atendimentoAlterar) {
            throw new Error("Atendimento não encontrado")
        }

        atendimentoAlterar.nome = nome || atendimentoAlterar.nome
        atendimentoAlterar.medico = medico || atendimentoAlterar.medico
        atendimentoAlterar.data = data || atendimentoAlterar.data
        atendimentoAlterar.hora = hora || atendimentoAlterar.hora
        atendimentoAlterar.valor = valor || atendimentoAlterar.valor
        atendimentoAlterar.pagamento = pagamento || atendimentoAlterar.pagamento

        await atendimentoAlterar.save()
    }

    async Delete(id){

    const atendimentoDeletar = await atendimento.findByPk(id)

    if(!carroDeletar){
        throw new Error("Carro não encontrado")
    }
    await carroDeletar.destroy()

    return atendimentoDeletar

    }
}
export default new AtendimentoRepository()