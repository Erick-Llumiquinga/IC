exports.seed = function(knex, Promise) {
  return knex('categorias').del()
    .then(function () {
      return knex('categorias').insert([
        {
          nombre: 'Comestibles'
        },
        {
          nombre: 'Bebidas'
        },
        {
          nombre: 'Dulces'
        },
        {
          nombre: 'Lacteos'
        },
        {
          nombre: 'Licores'
        },
        {
          nombre: 'Limpieza'
        }
    ]);
  });
};