const express = require('express');
const cors = require('cors');
const routes = require("./routes");


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP
  * 
  * GET: Busca uma informação do Banckend
  * POST: Criar uma informação no Backend
  * PUT: Alterar uma informação no Backend
  * DELETE: Deletar uma informação no Backend
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após o simbolo de "?" (Filtros, paginação).
   * Route Params: Parâmetros utilizados para identificar recursos.
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
   */

   /**
    * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
    * NOSQL: MongoDB, CouchDB
    */

    /**
     * Driver: SELECT * FROM USERS;
     * Query Builder: table.('user').select('*').where()
     */



app.listen(3333);