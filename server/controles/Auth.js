;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])


const user;
const password;

let leerDatos =(req,res)=>{
    let tabla = 'administradores'
    let campo= req.query.campo
    db.select(campo).from(tabla)
        .then(response=>{
        user = response.nomUsuario
        password = response.password    
        })
        .catch(error=>{
            console.log('NO existen registros')
        })
    }

    let authUser =(req,res)=>{
        leerDatos()

        let tabla = req.body.tabla
        let registro= req.body.datos;

        if(user != registro.email && password != registro.password){
            return res.status(404).json({
                ok:true,
                data: null,
                mesaje:`El usuario no existe` //para programador
            })
        }
        else{
            return res.status(200).json({
                ok:true,
                data: null,
                mesaje:`Inicio de sesion` //para programador
            })
        }

    }

module.exports = {
    authUser
}
    