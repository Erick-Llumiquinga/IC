exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('proveedores', function(table){
          table.bigIncrements('id').primary();
          table.string('nombre');
          table.string('contacto');
          table.string('celular');
          table.string('fijo');
          table.string('img')
          table.integer('proveedorId').references('id').inTable('categorias').notNull();
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('proveedores')
    ]);
};
