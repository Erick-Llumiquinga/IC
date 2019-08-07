;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])


const user = "";
const password = "";

let leerDatos = (res)=>{
    let tabla = 'administradores';
    let campo= '';
    db.select(campo).from(tabla)
        .then(response=>{
        user = res.nomUsuario
        password = res.clave    
        })
        .catch(error=>{
            console.log('NO existen registros')
        })
    }


    let authUser = (req,res)=>{
        
        let userCl = '';
        let claveCl = '';
        leerDatos()

        let registro = req.body
      
            userCl = registro.nombreUsuario
            claveCl = registro.clave;

        if(user == userCl && password == claveCl){
            return res.status(404).json({
                mesaje:`El usuario no existe` //para programador
            })
        }
        else{
            return res.status(200).json({
                ok:true,
                data: user,
                mesaje:`Inicio de sesion` //para programador
            })
        }

    }


module.exports = {
    authUser
}
    