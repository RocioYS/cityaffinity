var con = require('../config');
var bcrypt = require('bcrypt-nodejs');

var controller = {
    registro: function (req, res) {
        let password = req.body.password;
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, null, function (err, hash) {
                password = hash;
                let sql = `INSERT INTO usuario (nombre,apellido,email,nacionalidad,password) VALUES ('${req.body.nombre}',
        '${req.body.apellido}','${req.body.email}','${req.body.nacionalidad}','${password}')`;

                con.query(sql, function (err, result) {
                    if (err) {
                        console.log(err);
                        return res.send(err);
                    } else {
                        let usuario = {
                            id: result.insertId,
                            body: req.body
                        }
                        return res.send(usuario);
                    }
                    req.session.user = {
                        'usuario': req.body.nombre,
                        'email': req.body.email
                   }
                })
            })
        })
    },

    



  modificar: function (req, res){
    let sql = `UPDATE usuario set nombre = '${req.body.nombre}' where idUsuario = '${req.body.id}'`;
    console.log(req.body.id);
       con.query(sql, function (err, result) {
        
        if (err) {
            console.log(err);
            return res.send(err);
        }
        else {
            let proyecto = {
                id: result.insertId,
                body: req.body
            }
            console.log("se ha modificado correctamente");
            return res.send(proyecto);
        }
    })
  }
};









module.exports = controller;