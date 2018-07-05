

////////// main cityaffinity //////////

$(document).ready(function () {



    //-------------FORMULARIO DE REGISTRO----------------//
    var boton = $('#enviarInsert');

    //botón de html tiene nombre insert. Serialize para coger todos los datos del formulario.
    boton.on('click', function () {
        let data = $('#insert').serialize();

        $.post('http://localhost:3000/registro/add', data, function (usuario) {//mostrar la lista
            lista.append(usuario.body.id + ',' + usuario.body.nombre + ',' + usuario.body.email + ',' + usuario.body.nacionalidad + ',' + usuario.body.password
            );
            //console.log(usuario.id);
        });

        //Aqui recibimos la informacion de la base de datos. 
        // $.get('http://localhost:3000/registro/', function (usuario) {
        //     console.log(usuario)
        // });
    });

   

    //---------------CONSULTA USUARIOS CRUD-------------------//

    var consulta = $('#consultar');

    // consulta.on('click', function () {
    //     let data = $('#nombre').val();
    //     let data2 = $('#email').val();
    //     let data3 = $('#nacionalidad').val();

    //Me traigo los datos desde la base de datos y se generan los td según lo que haya en bbdd

    var mostrar = $('#mostrarDatos')
    $.get('http://localhost:3000/gestion_usuario', function (res) {
        res.forEach(usuario => {
            mostrar.append('<tr  id="' + usuario.idusuario + '">' + '<td>' + usuario.idusuario + '</td>' +
                '<td>' + usuario.nombre + '</td>' +
                '<td>' + usuario.email + '</td>' +
                '<td>' + usuario.nacionalidad + '</td>' +
                '<td>' + '<a href= modificar?id=' + usuario.idusuario + ' title=Modificar data-toggle=tooltip>' +
                '<i class="far fa-edit">' + '</i>' + '</a>' +
                '<a href="#" title= Eliminar data-toggle=tooltip class="eliminarDatos">' +
                '<i class="far fa-trash-alt">' + '</i>' + '</a>' + '</td>' + '</tr>')
        });
    })

    //Eliminar usuarios
    mostrar.on('click', '.eliminarDatos', function (usuario) {
        let id = $(this).parent().parent().attr('id');
        //console.log(id)
        let file = $(this).parent().parent();
        $.post('http://localhost:3000/gestion_usuario/delete', { id: id }, function (usuario) {
            file.remove();
        });
    });


    //Actualizar datos de usuario
    var modificar = $('#botonModificar')
    modificar.on('click', function(){
        let modificado = $('#modificar').serialize();
        $.post('http://localhost:3000/gestion_usuario/modificar/update', modificado, { id: id, nombre: nombre, email: email, nacionalidad: nacionalidad, password: password },
        function (usuario) {});
            modificado.remove();
        });
    });



        // $('#modificaplayer').on('click', function() {
        //     let formModificado = $('#formularioplayer').serialize();
        //     $.post('http://localhost:3000/jugador/modificar', formModificado, function(jugador) {});
        //     formModificado.remove();
        // });

        
    
        //---------------------Ejemplo para el middleware. Subiendo fotos a través de formulario------------//
        // $('#insert').on('submit', function (e) {
        // e.preventDefault();
        // let formulario = new FormData($(this)[0]);
        // $.ajax({
        //     type: 'POST',
        //     url: '/registro/add',
        //     data: formulario,
        //     contentType: false,
        //     cache: false,
        //     processData: false
        // });
        //-------------------------------------------------------------------------------------------------//


       $.validate({
            lang: 'es',
            modules: 'security'
    
        });      
    

//});
