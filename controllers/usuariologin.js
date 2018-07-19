var con = require('../config');
var bcrypt = require('bcrypt-nodejs');
var app = require('../app');

//Login

var login = {
    loginUsuario: function (req, res) {
        let sql = `SELECT * from usuario where email ='${req.body.email}'`;
        con.query(sql, function (err, result) {
            if (err) {
                return res.send(err);
            } else {
                console.log(result);
                if (result == "") {
                    return res.send('Email introducido no válido');
                } else {
                    bcrypt.compare(req.body.password, result[0].password, function (err, iguales) {
                        if (err) {
                            return res.send(err)
                        } else {
                            if (iguales) {
                                req.session.user = {
                                    'id': result[0].id,
                                    'usuario': result[0].nombre,
                                    'email': result[0].email
                                }
                                console.log('son iguales')
                                return res.send(result);

                            } else {
                                console.log('el password no es correcto')
                                return res.send('La contraseña no es correcta')
                            };
                        };
                    });
                };
            };
        });
    },

    logoutUsuario: function (req, res) {
        if (req.session.user) {
            req.session.destroy();
        } else {
            console.log('err');
            return res.send('No existe un login de usuario')
        }
    }
};


module.exports = login;