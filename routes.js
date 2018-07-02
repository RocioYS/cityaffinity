
////// routes cityaffinity //////

var con = require('./config');
var app = require('./app');
//----- var para el middleware------//
// var multipart = require('connect-multiparty');
// var multipartMiddleware = multipart({uploadDir: './public/img'});
// var fs = require('fs');

//rutas
app.get('/', function (req, res) {
    res.render('index');
});
app.get('/registro', function (req, res) {
    res.render('registro');
});
app.get('/gestionUsuario', function (req, res) {
    res.render('gestion_usuario');
});

//Para modificar datos pero en render
app.get('/modificar', function (req, res) {
    let sql = `SELECT * FROM usuario where Idusuario= '${req.query.id}'`;
        con.query(sql, function (err, result) {
            if (err) {
                res.send(err);
            }
            else {
                res.render('modificar',{
                    resultado: result
                })
            }
        });
    });

//Añadir proyectos

//-----------------Añadiendo el Middleware. Esto es para subir fotos------------//
    // multipartMiddleware, esto se añade delante de la function
    // let oldPath = req.files.foto.path; Y estas 3 líneas antes del let sql
    // let newPath = './public/img/' + req.files.foto.originalFilename;
    // fs.rename(oldPath, newPath, function (err) { 
    // });
//------------------------------------------------------------//

app.post('/registro/add', function (req, res) {
    
    let sql = `INSERT INTO usuario (nombre, email, nacionalidad, password) VALUES ('${req.body.nombre}','${req.body.email}','${req.body.nacionalidad}','${req.body.password}')`;
    con.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
            console.log(err);
        }
        else {
            let usuario = {
                id: result.insertId,
                body: req.body  
            }
            res.send(usuario);
        }
    });
   
});

//CRUD-o

//consultar proyectos
app.get('/gestion_usuario', function (req, res) { 
    let sql = 'SELECT * from usuario';
    con.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.send(result);
        }   

    });

//Modificar tareas
app.post('/gestion_usuario/modificar/update', function (req, res) {
    let sql = `UPDATE usuario where id = '${req.body.id}'`;
    con.query(sql, function (err, result) {
       
            res.send(usuario);
        });
});

    //Borrar. Cuidado con la nomenclatura de las columnas "where idusuario"
    app.post('/gestion_usuario/delete', function (req, res) {
        let sql = `DELETE FROM usuario where idusuario = '${req.body.id}'`;
        con.query(sql, function (err, usuario) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            else {
                res.send(usuario);
            }
        });
    });
    
    // //Modificar proyectos
    // app.post('/gestion_usuario/update', function (req, res) {
    //     let sql = `UPDATE usuario set name='${req.body.nombre}' where id = '${req.body.id}'`;
    //     con.query(sql, function (err, usuario) {
    //         if (err) {
    //             res.send(err);
    //         }
    //         else {
    //              let tareas = {
    //                  nombre: req.body.nombre
    //              }
    //             res.send(usuario);
    //         }
    //     });
});

module.exports = con;
module.exports = app;