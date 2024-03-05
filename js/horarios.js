let listahorarios=[]

const crearHorarios=(valor)=>{

    let salonesdisponible=valor
    if(salonesdisponible>0){
        const nuevohorario={
            Id:length.listahorarios+1,
            programa:"",
            salonId:"",
            Profesro:"",
            Estudiantes:[],
            horario:{
            lunes:{"6-8":"",
            "8-10":"",
            "10-12":"Almuerzo",
            "14-16":"",
            "16-18":"",
            "18-20":""},
            Martes:{"6-8":"",
            "8-10":"",
            "10-12":"Almuerzo",
            "14-16":"",
            "16-18":"",
            "18-20":""},
            Miercoles:{"6-8":"",
            "8-10":"",
            "10-12":"Almuerzo",
            "14-16":"",
            "16-18":"",
            "18-20":""},
            Jueves:{"6-8":"",
            "8-10":"",
            "10-12":"Almuerzo",
            "14-16":"",
            "16-18":"",
            "18-20":""},
            Viernes:{"6-8":"",
            "8-10":"",
            "10-12":"Almuerzo",
            "14-16":"",
            "16-18":"",
            "18-20":""}
            
        }   
    }
    salonesdisponible--;
    listahorarios.push(nuevohorario);
    }
}

const agregarAsignaturasAlHorario=()=>{
    const contenedor=document.getElementById('');
    contenedor.innerHTML=`
    <form id="MenuAgregarAsignaturasAHorario">
    <h3>Menu Agregar Asignaturas al Horario</h3>
        <label for="NombreAsignatura"> Nombre de la Asignatura:</label>
        <input type="text" id="NombreAsignatura" required>
        <label for="NumeroHoras">Número de Horas para materia:</label>
        <input type="number" id="NumeroHoras" required>
        <button type="button" onclick="crearEstudiante()">Siguiente</button>
        <button id="atras" class="atras" onclick="opcionesEstudiantes()">Atrás</button>
    </form>
  `;
}