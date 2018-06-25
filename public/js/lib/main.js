//Parte CLIENTE

$(document).ready(function () {
    var boton = $('#enviarInsert');
    var lista = $('#listaTareas');


    // $.get('http://localhost:3000/tareas/', function(proyectos){
    // console.log(tareas)
    //     proyectos.forEach(tareas => {
    //         listaTareas.append('<li id="' + tareas.id + '">' + tareas.nombre  + 
    //         '<button class="eliminarProyectos">' + 'Eliminar Proyectos </button>' +
    //         '<br><input type="text" class="nuevoNombre"' + '</li>') //AQUÍ YA NO SERÍA TODO ESTO
    //     });
    // });


    boton.on('click', function () {
        let data = $('#tareaText').val();
        //let data2 = $('#estado').val();
        $.post('http://localhost:3000/tareas/add', { nombre: data }, function (tareas) {//mostrar la lista
           lista.append('<li id="' + tareasPendientes.id + '">'
               + '<button class="eliminarTareas">' + 'Eliminar Tarea </button>'

           );
           //console.log(tareas.id);
       });
       
    });

    lista.on('click', '.eliminarProyectos', function () {
        let id = $(this).parent().attr('id');
        $(this).parent().remove();
        $.post('http://localhost:3000/tareas/delete', { id: id }, function (tareas) {
        });
    });

    lista.on('change', '.nuevoNombre', function () {
        let item = $(this).parent();
        let id = item.attr('id');
        let nombre = $(this).val();
        $.post('http://localhost:3000/tareas/update', { id: id, nombre: nombre }, function (tareas) {
            item.html(nombre + '<button class="eliminarProyecto">' + 'Eliminar proyecto</button>' +
            '<input type="text" class="nuevoNombre">' + '</li>'); 
        });
    });
    
});

    // lista.on('click', '.eliminarProyecto', functio(){
    //     let id = $(this).parent().attr('id');
    //     $(this).parent().remove();
    //     $.post('http://localhost:3000/tareas/delete', {id: id})

    // })





