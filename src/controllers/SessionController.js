import User from "../models/User";

// Métodos: index, show, update, store, destroy

/*
index: listagem de sessões
store: Criar uma sessão
show: Quando queremos listar uma ÚNICA sessão
update: quando queremos alterar alguma sessão
destroy: quando queremos deletar uma sessão
*/


class SessionController {
    async store(req, res) {
        const { email } = req.body;

        //Verificando se este usuário ja existe
        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email })
        }

        return res.json(user)
    }
}

export default new SessionController();