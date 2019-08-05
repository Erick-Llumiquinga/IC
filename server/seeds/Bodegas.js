  
exports.seed = function(knex, Promise) {
  return knex('bodegas').del()
    .then(function () {
      return knex('bodegas').insert([
        {
          nombre : 'Central',
          observacion : 'ninguna'
        }
    ]);
  });
};