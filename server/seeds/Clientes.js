exports.seed = function(knex, Promise) {
  return knex('clientes').del()
    .then(function () {
      return knex('clientes').insert([
        {

          nombre :'Stalin',
          cedula :'1725111155',
          direccion :' Guamani',
          celular : '0995791924',
          fijo: '3032811'
        }
    ]);
  });
};