import database from "../config/database.js";

class Atendimento {
    constructor() {
        this.model = database.db.define("carros", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome:{
                type: database.db.Sequelize.STRING,
            } ,
            data: {
                type: database.db.Sequelize.INTEGER,
            },
            hora: {
                type: database.db.Sequelize.INTEGER,
            },
            valor: {
                type: database.db.Sequelize.INTEGER,
            },
            pagamento:{
                type: database.db.Sequelize.INTEGER,
            }

        })
    }
}
export default new Atendimento().model