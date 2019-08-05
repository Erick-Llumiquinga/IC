exports.seed = function(knex, Promise) {
  return knex('categorias').del()
    .then(function () {
      return knex('categorias').insert([
        {

          nombre: 'Bebidas'
        },
        {

          nombre: 'Licores  '
        },
        {

          nombre: 'Comestibles'
        },
        {
  
          nombre: 'Dulces'
        },
        {
 
          nombre: 'Lacteos'
        },
        {
 
          nombre: 'Limpieza'
        }
    ]);
  });
};