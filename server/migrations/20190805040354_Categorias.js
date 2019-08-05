exports.up = function(knex, Promise) {
    return Promise.all([  knex.schema.createTable('categorias', function(table){
        table.bigIncrements('id').primary();
        table.string('nombre');
        table.string('img');
        })
    ]);
  
};

exports.down = function(knex, Promise) {s
    return Promise.all([
        knex.schema.dropTable('categorias')
    ]);
};