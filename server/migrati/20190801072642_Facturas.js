
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('facturas', function(table){
            table.bigIncrements('id').primary();
            table.integer('clienteid').references('id').inTable('clientes').notNull();
            table.integer('adminid').references('id').inTable('administradores').notNull();
            table.date('fechaFact');
            table.string('productosId').references('id').inTable('productos').notNull();
            table.string('iva'); 
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.dropTable('facturas'),
     ]);
};
