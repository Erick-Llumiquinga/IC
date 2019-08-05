exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('detalle_facturas', function(table){
            table.bigIncrements('id').primary();
            table.integer('facturaid').references('id').inTable('facturas').notNull();
            table.integer('productoid').references('id').inTable('productos').notNull();
            table.integer('cantidadVenta');
            table.varchar('descripcion');
            table.string('valorTotal');
            
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.dropTable('detalle_facturas'),
     ]);
};
