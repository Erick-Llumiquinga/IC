exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('bodegas', function(table){
            table.bigIncrements('id').primary();
            table.string('nombre');
            table.string('observacion');
            
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.dropTable('bodegas'),
     ]);
};