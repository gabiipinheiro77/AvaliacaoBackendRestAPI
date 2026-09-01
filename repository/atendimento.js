import Atendimento from "../model/atendimento.js"

class AtendimentoRepository{

    async Find(_,res){
        
       const atendimento = await ServiceAtendimento.findAll()
       
       return atendimento

    }

    async Create() {

    }

    async Update(){

    }

    async Delete(){

    }
}
export default new AtendimentoRepository()