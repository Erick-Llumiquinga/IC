
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('ventas', function(table){
            table.bigIncrements('id').primary();
            table.integer('productoid').references('id').inTable('productos').notNull();
            table.date('fechaFact').notNull();
            table.integer('cantidadProductos').notNull();
            table.integer('valorTotal').notNull();            
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.dropTable('ventas'),
     ]);
};
