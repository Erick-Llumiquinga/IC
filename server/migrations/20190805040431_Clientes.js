exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('clientes', function(table){
            table.bigIncrements('id').primary();
            table.string('nombre');
            table.string('cedula');
            table.string('direccion');
            table.string('celular');
            table.string('fijo');
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.dropTable('clientes'),
     ]);
};
