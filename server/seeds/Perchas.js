exports.seed = function(knex, Promise) {
  return knex('perchas').del()
    .then(function () {
      return knex('perchas').insert([
        {

          bodegaid : 1, 
          nombre :'Bebidas',
          
          descripcion :' productos de bebidas',
          observacion : 'ninguna'
        },
        {
    
          bodegaid : 1, 
          nombre :'Comestibles',
          
          descripcion :' productos comestibles',
          observacion : 'ninguna'
        },
        {
         
          bodegaid : 1, 
          nombre :'Licor',
          
          descripcion :' productos de licor',
          observacion : 'ninguna'
        },
        {
    
          bodegaid : 1, 
          nombre :'Dulces',
          
          descripcion :' productos dulces',
          observacion : 'ninguna'
        },
        {
     
          bodegaid : 1, 
          nombre :'Limpieza',
          
          descripcion :' productos limpieza',
          observacion : 'ninguna'
        }
    ]);
  });
};