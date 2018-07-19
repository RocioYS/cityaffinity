////// routes cityaffinity //////

var con = require('./config');
var app = require('./app');

//----- var para el middleware------//
// var multipart = require('connect-multiparty');
// var multipartMiddleware = multipart({uploadDir: './public/img'});
// var fs = require('fs');


//--------RUTAS PARA VER PÁGINAS EN EL NAVEGADOR------//

//Render del inicio
app.get('/', function (req, res) {
    res.render('index');
});

//Render del registro
app.get('/registro', function (req, res) {
    res.render('registro');
});

//Render de la gestión de usuario
app.get('/gestionUsuario', function (req, res) {
    res.render('gestion_usuario');
});

//Render del login
app.get('/login', function (req, res) {
    res.render('login');
});

//---------LOGIN--------//


var auth = function (req, res, next) {
    if (req.session.user)
        return next();
    else
        return res.sendStatus(404);
};

//Render donde te lleva el login ******ESTO ME DA ERROR*****
app.get('/logueado', auth, function (req, res) {
    res.render('logueado', {
        email: req.session.user.email
    });
});



//------CONTROLLER PARA REGISTRO DE USUARIO-------//
var UsuarioController = require('./controllers/admin_usuario');
app.post('/registro', UsuarioController.registro);


//Ruta para Login
var LoginController = require('./controllers/usuariologin');
app.post('/login', LoginController.loginUsuario);





//Para modificar datos pero en render
app.get('/modificar', function (req, res) {
    let sql = `SELECT * FROM usuario where Idusuario= '${req.query.id}'`;
    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.render('modificar', {
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








//NO VALE
//app.post('/registro/add', function (req, res) {
//     let sql = `INSERT INTO usuario (nombre, apellido, email, nacionalidad, password) VALUES ('${req.body.nombre}','${req.body.apellido}','${req.body.email}','${req.body.nacionalidad}','${req.body.password}')`;
//     con.query(sql, function (err, result) {
//         if (err) {
//             console.log(err);
//             res.send(err);
//             console.log(err);
//         } else {
//             let usuario = {
//                 id: result.insertId,
//                 body: req.body
//             }
//             res.send(usuario);
//         }
//     });

// });




//----------------------CRUD-------------------------//

//consultar proyectos
app.get('/gestion_usuario', function (req, res) {
    let sql = 'SELECT * from usuario';
    con.query(sql, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(result);
        }

    });

//Modificar tareas
app.post('/gestion_usuario/modificar/update', function (req, res) {
    let sql = `UPDATE usuario where id = '${req.body.id}'`;
    con.query(sql, function (err, usuario) {
            if (err) {
                res.send(err);
            }
            else {
                 let usuario = {
                     nombre: req.body.nombre,
                     apellido: req.body.apellido,
                     email: req.body.email,
                     nacionalidad: req.body.nacionalidad,
                     password: req.body.password
                 }
                res.send(usuario);
            }
        });
    });

});


//Borrar. Cuidado con la nomenclatura de las columnas "where idusuario"
app.post('/gestion_usuario/delete', function (req, res) {
    let sql = `DELETE FROM usuario where idusuario = '${req.body.id}'`;
    con.query(sql, function (err, usuario) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(usuario);
        }
    });
});




//No olvidar importar los módulos

module.exports = con;
module.exports = app;