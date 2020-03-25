const crypto = require('crypto');
const connection = require('../database/connection')


module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    async create(request, response) {
        /*
        acessando parâmetro do request (query params):
        */
        //const params = request.query;

        /* 
            acessando parametro de rota (route params):
                rota definida como: '/users/:id'
        */
        // const params = request.params;

        /* 
            acessando o request body:
        */
        const { name, email, whatsapp, cidade, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            cidade,
            uf
        });

        return response.json({ id });
    }
}