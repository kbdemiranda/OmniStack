
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        // Definindo relacionamento com a tabela ong_id
        table.string('ong_id').notNullable();
        // Definindo chave estrangeira
        table.foreign('ong_id').references('id').inTable('ong');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
