

////////// main cityaffinity //////////

$(document).ready(function () {

    //////FORMULARIO DE REGISTRO
    var boton = $('#enviarInsert');

    boton.on('click', function () {
        let data = $('#insert').serialize();

        $.post('http://localhost:3000/registro/add', data, function (usuario) {//mostrar la lista
            lista.append(usuario.body.id + ',' + usuario.body.nombre + ',' + usuario.body.email + ',' + usuario.body.nacionalidad + ',' + usuario.body.password
            );
            //console.log(usuario.id);
        });

        //Aqui recibimos la informacion de la base de datos. 
        $.get('http://localhost:3000/registro/', function (usuario) {
            console.log(usuario)
        });
    });



    //////CONSULTA USUARIOS CRUD

    var consulta = $('#consultar');
    
    // consulta.on('click', function () {
    //     let data = $('#nombre').val();
    //     let data2 = $('#email').val();
    //     let data3 = $('#nacionalidad').val();

    //Me traigo los datos desde la base de datos

    $.get('http://localhost:3000/gestion_usuario', function (usuarios) {
        console.log(usuarios);
        usuarios.forEach(usuario => {
            consulta.append(
                '<tr>' + '<td id="' + usuario.idusuario + '">' + usuario.idusuario + '</td>' +
                '<td>' + usuario.nombre + '</td>' +
                '<td>' + usuario.email + '</td>' +
                '<td>' + usuario.nacionalidad + '</td>' +  
                '<td>' + '<button type="button" class="btn btn-success">' + 'Ver detalles </button>' +   
                '<button type="button" class="btn btn-warning">' + 'Modificar </button>' +
                '<button type="button" class="btn btn-danger">' + 'Borrar </button>' + '</td>' +'</tr>'

            );
            console.log(usuario.id);
        });

    });

    //Eliminar usuario
    
    var eliminar = $('#eliminar');

    eliminar.on('click', '.eliminarProyectos', function () {
        let id = $(this).parent().attr('id');
        $(this).parent().remove();
        $.post('http://localhost:3000/gestion_usuario/delete', { id: id }, function (usuarios) {
        });
    });

    //este validate daba problemas al comienzo, así que para el final
    $.validate({
        lang: 'es',
        modules: 'security'

    });

});
