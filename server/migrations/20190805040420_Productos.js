exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('productos', function(table){
            table.bigIncrements('id').primary();
            table.integer('proveedorid').references('id').inTable('proveedores').notNull();
            table.integer('categoriaid').references('id').inTable('categorias').notNull();
            table.string('nombre').notNull();    
            table.string('precioUnit').notNull();
            table.date('fechaLab').notNull();
            table.date('fechaVenc').notNull();
            table.integer('cantidad').notNull();
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.dropTable('productos'),
     ]);
};
