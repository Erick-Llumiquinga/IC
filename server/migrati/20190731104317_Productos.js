
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('productos', function(table){
            table.bigIncrements('id').primary();
            table.integer('proveedorid').references('id').inTable('proveedores').notNull();
            table.integer('perchaid').references('id').inTable('perchas').notNull();
            table.integer('categoriaid').references('id').inTable('categorias').notNull();
            table.string('precioUnit');
            table.date('fecharLab');
            table.date('fechaVenc');
            table.integer('cantidad');
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.dropTable('productos'),
     ]);
};
