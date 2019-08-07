exports.seed = function(knex, Promise) {
  return knex('administradores').del()
    .then(function () {
      return knex('administradores').insert([
        {
          apellido: 'Llumiquinga',
          clave :'420Erick',
          nomUsuario : 'erickUser',
          nombre : 'Erick'
        }
    ]);
  });
};