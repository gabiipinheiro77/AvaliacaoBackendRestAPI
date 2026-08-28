import ServiceAtendimento from '../service/atendimento.js'

class ControllerAtendimento {
    //////////////////////////////////
    Buscar(req, res) {
        try {
            const atendimentos = ServiceAtendimento.Buscar()
            res.send({ mensagem: atendimentos })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }

    }
    ///////////////////////////////////
    Detalhe(req, res) {
        try {
            const id = req.params.id

            const atendimento = ServiceAtendimento.Detalhe(id)

            res.status(200).send({ mensagem: atendimento})
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }
    //////////////////////////////////
    Criar(req, res) {
        try {
            const { id, nome, medico, data, hora, valor, pagamento } = req.body

            ServiceAtendimento.Criar(id, nome, medico, data, hora, valor, pagamento)

            res.send(201).send({ mensagem: "Cadastro de paciente feito!" })

        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })

        }
    }
    //////////////////////////////////
    Alterar(req, res) {
        try {
            const { nome, medico, data, hora, valor, pagamento } = req.body
            const id = req.params.id

            ServiceAtendimento.Alterar( nome, medico, data, hora, valor, pagamento )

            res.status(201).send({ mensagem:"Alterado com sucesso!"})
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    //////////////////////////////////
    Deletar(req, res) {
        try {
            const id = req.params.id

            ServiceAtendimento.Deletar(id)

            res.status(204).send({ mensagem:"Deletado!"})

        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }
    //////////////////////////////////
    Pagamento() {
        try {

        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })

        }
    }
}

export default new ControllerAtendimento