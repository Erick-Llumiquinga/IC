
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('ventas', function(table){
            table.bigIncrements('id').primary();
            table.integer('productoid').references('id').inTable('productos').notNull();
            table.date('fechaFact');
            table.integer('cantidadProductos');
            table.integer('valorTotal');            
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.dropTable('ventas'),
     ]);
};
