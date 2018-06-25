var con = require('./config');
var app = require('./app');

//rutas
app.get('/', function (req, res) {
    res.render('index');
});


//Añadir proyectos
app.post('/tareas/add', function (req, res) {
    let sql = `INSERT INTO tareas (nombre,estado) VALUES ('${req.body.nombre}','${req.body.estado}')`;
    // para formularios muy largos 
    //let formulario = $("#insert").serialize()
    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            let tareas = {
                id: result.insertId,
                nombre: req.body.nombre,
                estado: req.body.estado,
                
            }
            res.send(tareas);
        }
    });
});

//consultar proyectos
app.get('/tareas', function (req, res) {
    let sql = 'SELECT * from tareas';
    con.query(sql, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }   
    });

    app.post('/tareas/delete', function (req, res) {
        let sql = `DELETE FROM tareas where id = '${req.body.id}'`;
        con.query(sql, function (err, tareas) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(tareas);
            }
        });
    });
    
    //Modificar proyectos
    app.post('/tareas/update', function (req, res) {
        let sql = `UPDATE tareas set name='${req.body.nombre}' where id = '${req.body.id}'`;
        con.query(sql, function (err, tareas) {
            if (err) {
                res.send(err);
            }
            else {
                 let tareas = {
                     nombre: req.body.nombre
                 }
                res.send(tareas);
            }
        });
    });
    
});

/* OJO!!!! A cómo se llaman a las cosas o name, o nombre o lo que sea
pero que tenga concordancia con mi bbdd porque sino sale undefined.
`INSERT INTO proyectos (nombre) VALUES ('${req.body.nombre}')`
*/