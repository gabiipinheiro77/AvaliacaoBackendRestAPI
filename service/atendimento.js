import ControllerAtendimento from "../controller/atendimento.js"
import AtendimentoRepository from "../repository/atendimento.js"

class ServiceAtendimento {
    Buscar(){
        return AtendimentoRepository
    }
////////////////////////
    Detalhe(id){
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        const atendimento = AtendimentoRepository.find(it => it.id === id)

        if(!atendimento) {
            throw new Error(`ID ${id} do atendimento não encontrado`)
        }
        return atendimento
    }
////////////////////////
    Criar( id, nome, medico, data, hora, valor, pagamento ){
        if(
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
        AtendimentoRepository.push({ id, nome, medico, data, hora, valor, pagamento })
        return { id, nome, medico, data, hora, valor, pagamento }
    }
////////////////////////
    Alterar(id, nome, medico, data, hora, valor, pagamento){
        if (
            !id 
            || !nome 
            || !medico 
            || !data 
            || !hora 
            || !valor 
            || !pagamento
        ){
            throw new Error("Favor informar os dados");
        }

        const index = AtendimentoRepository.findIndex(
            atendimento => atendimento.id === Number(id));
        
            if(index ){
                throw new Error("Atendimento não encontrado!")
            }

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
    Deletar(id){
        if (!id) {
            throw new Error ("Favor informar ID")
        }

        const atendimento = AtendimentoRepository.findIndex(it => it.id == id)

        AtendimentoRepository.splice(atendimento, 1)

        return id
    }
////////////////////////

}

export default new ServiceAtendimento()