

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

    var mostrar = $('#mostrarDatos')
    $.get('http://localhost:3000/gestion_usuario', function (res){
        res.forEach(usuario => {
            mostrar.append('<tr  id="'+ usuario.idusuario + '">' + '<td>' + usuario.idusuario + '</td>' +
            '<td>' + usuario.nombre + '</td>' +
            '<td>' + usuario.email + '</td>' +
            '<td>' + usuario.nacionalidad + '</td>' +
            '<td>' + '<a href= modificar?id='+ usuario.idusuario + ' title=Modificar data-toggle=tooltip>' +
            '<i class="far fa-edit">' + '</i>' + '</a>' +
            '<a href="#" title= Eliminar data-toggle=tooltip class="eliminarDatos">' +
            '<i class="far fa-trash-alt">' + '</i>' + '</a>' + '</td>' + '</tr>')
         });
    })
    mostrar.on('click', '.eliminarDatos', function(usuario) {
        let id = $(this).parent().parent().attr('id');
        //console.log(id)
        let file = $(this).parent().parent();
        $.post('http://localhost:3000/gestion_usuario/delete', { id: id }, function(usuario) {
        file.remove();
        });
    });

    $.post('gestion_usuario/update', { id: id, estado: estado },
            function (res) {
                tarea.attr('data-estado', res.estado);
                tarea.parent().parent().next().find('ul').append(tarea);
            });
    //Eliminar usuario
    
    // var eliminar = $('#eliminar');

    // eliminar.on('click', '.eliminarProyectos', function () {
    //     let id = $(this).parent().attr('id');
    //     $(this).parent().remove();
    //     $.post('http://localhost:3000/gestion_usuario/delete', { id: id }, function (usuarios) {
    //     });
    // });

    //este validate daba problemas al comienzo, así que para el final
    $.validate({
        lang: 'es',
        modules: 'security'

    });

});
