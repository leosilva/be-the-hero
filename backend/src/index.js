const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */


/**
 * Métodos HTTP:
 *
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Delatar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: parâmetros nomeados enviados na rota após o símbolo de "?" (Filtros, paginação)
 * Route Params: parâmetros utilizados para identificar recursos
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, PostgreSQL, SQLite, Oracle, etc.
 * NoSQL: MongoDB, CouchBD, etc.
 */

/**
 * Driver: SELECT * FROM users 
 * Query Buider: table('users').select('*')
 */



app.listen(3333);