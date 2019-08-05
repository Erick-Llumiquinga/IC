
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('perchas', function(table){
            table.bigIncrements('id').primary();
            table.integer('bodegaid');
            table.string('nombre');
            table.string('descripcion');
            table.string('observacion');

        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.dropTable('perchas'),
     ]);
};
