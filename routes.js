
////// routes cityaffinity //////

var con = require('./config');
var app = require('./app');

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

    // //borrar
    // app.post('/gestion_usuario/delete', function (req, res) {
    //     let sql = `DELETE FROM usuario where id = '${req.body.id}'`;
    //     con.query(sql, function (err, usuario) {
    //         if (err) {
    //             res.send(err);
    //         }
    //         else {
    //             res.send(usuario);
    //         }
    //     });
    // });
    
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