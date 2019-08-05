exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('administradores', function(table){
            table.bigIncrements('id').primary();
            table.string('nombre');
            table.string('apellido');
            table.string('nomUsuario');
            table.string('clave');
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.dropTable('administradores'),
     ]);
};
