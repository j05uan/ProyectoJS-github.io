const guardarEstudiante= async(nuevoEstudiante)=>{
    try{

        const respuesta=await fetch('http://localhost:3000/clientes',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(nuevoEstudiante),
        });

        if(!respuesta.ok){
           throw new Error('Error al crear el estudiante. Estado: ',respuesta.status);
        }
        const EstudianteCreado=await respuesta.json();
       
        
        console.log('Estudiante creado:', EstudianteCreado);

    }catch(error){
        console.error("Error al cargar Estudiante",error.message);
    }
}



const opcionesEstudiantes= async ()=>{
    // await loadEstudiantes();
    const estudiantesform = document.getElementById('OpcionesEstudiantes');
    const contenedor = document.getElementById('contenedor');
    const boton = document.getElementById("botonEstudiantes");
    const Departamentos =document.getElementById('Departamentos');
    const Prosfesores =document.getElementById('Prosfesores');
    const Universidad1 =document.getElementById('Universidad1');
    const Universidad2 =document.getElementById('Universidad2');
    const Universidad3 =document.getElementById('Universidad3');
    const Universidad4 =document.getElementById('Universidad4');
    const Universidad5 =document.getElementById('Universidad5');
    const Universidad6 =document.getElementById('Universidad6');
    const contenedor2 = document.getElementById('OpcionesEstudiantes');
    contenedor2.innerHTML = `
      <form>
          <button class="botonsEstudiantes" id="botoncrearEstudinte"type="button" onclick="formularioCrearEstudinte()">Crear Estudinte</button>
          <button class="botonsEstudiantes" id="botonmodificarEstudinte" type="button" onclick="modificarEstudinte()">Modificar Estudinte</button>
          <button class="botonsEstudiantes" id="botonmostrarListado" type="button" onclick="mostrarListado()">Ver Listado de Estudintes</button>
          <div id="crearEstudiante"></div>
          <button id="atras" class="atras" onclick="inicio()">atras</button>
          
      </form>
  `;
    contenedor.style.alignContent='center';
    estudiantesform.style.display='flex';
    estudiantesform.style.width='1550px';
    estudiantesform.style.height='630px';
    estudiantesform.style.justifyContent='center';
    estudiantesform.style.padding='2rem ';


    boton.style.display="none";
    Departamentos.style.display='none';
    Prosfesores.style.display='none';
    Universidad1.style.display='none';
    Universidad2.style.display='none';
    Universidad3.style.display='none';
    Universidad4.style.display='none';
    Universidad5.style.display='none';
    Universidad6.style.display='none';

}

const formularioCrearEstudinte= async()=>{
    const boton1= document.getElementById('botoncrearEstudinte');
    const boton2 = document.getElementById('botonmodificarEstudinte')
    const boton3 = document.getElementById('botonmostrarListado')
    const contenedorestu = document.getElementById('crearEstudiante');
    contenedorestu.innerHTML = `
      <form id="MenuCrearEstudiante">
        <h3>Menu Crear Estudiantes</h3>
        <label for="identificacionEstudiante">Numero de Identificacion del Estudiante:</label>
        <input type="number" id="identificacionEstudiante" required>
        <label for="nombreEstudiante">Nombre del Estudiante:</label>
        <input type="text" id="nombreEstudiante" required>
        <label for="edadEstudiante">Edad del Estudiante:</label>
        <input type="number" id="edadEstudiante" required>
        <label for="emailEstudiante">Correo Electrónico del Estudiante:</label>
        <input type="email" id="emailEstudiante" required>
        <button type="button" onclick="crearEstudiante()">Crear Estudiante</button>
        <button id="atras" class="atras" onclick="opcionesEstudiantes()">atras</button>
      </form>
  `;
   const atras=document.getElementById('atras');
   atras.style.display = 'none';
   boton1.style.display='none';
   boton2.style.display='none';
   boton3.style.display='none';

   await crearEstudiante();
   
}
const crearEstudiante= async ()=>{
    const nombreInput=document.getElementById('nombreEstudiante');
    const edadInput=document.getElementById('edadEstudiante');
    const emailInput=document.getElementById('emailEstudiante');
    const IdInput=document.getElementById('identificacionEstudiante')

    const nombre=nombreInput.value;
    const edad=edadInput.value;
    const email=emailInput.value;
    const Id=IdInput.value;

    const nuevoEstudiante={
        id:listaEstudiantes.length+1,
        identificaion:Id,
        nombre:nombre,
        edad: edad,
        email: email
    }

  
    await guardarEstudiante(nuevoEstudiante);
    await loadEstudiantes();
    
    IdInput.value='';
    nombreInput.value='';
    edadInput.value='';
    emailInput.value='';

    alert('Estudiante creado con éxito!');

    return nuevoCliente;

}
const modificarEstudinte =async()=>{
    const boton1= document.getElementById('botoncrearEstudinte');
    const boton2 = document.getElementById('botonmodificarEstudinte');
    const boton3 = document.getElementById('botonmostrarListado');
    const contenedorestu = document.getElementById('crearEstudiante');
    boton1.style.display='none';
    boton2.style.display='none';
    boton3.style.display='none';
    
    verificarEstudiantes();
    if (Estado==='Encontrado'){
        contenedorestu.innerHTML = `
      <form id="MenuModificarEstudiante">
        <h3>Menu Modificar Estudiantes</h3>
        <h3>Seleccione el item que desea modificar</h3>
        
        <button for="identificacionEstudiante" onclick="modificarIdentificacion()">Numero de Identificacion del Estudiante:</button>
        
        <button for="nombreEstudiante" onclick="modificarNombre()">Nombre del Estudiante:</button>
        
        <button for="edadEstudiante" onclick="modificarEdad()">Edad del Estudiante:</button>
        
        <button for="emailEstudiante" onclick="modificarEmail()">Correo Electrónico del Estudiante:</button>
        
        
        
        <button id="atras" class="atras" onclick="opcionesEstudiantes()">atras</button>
        
      </form>
  `;
    }

}
// const GuardarModificionEstudiante=()={

// }




const modificarIdentificacion=()=>{
    const contenedorestu = document.getElementById('crearEstudiante');
    contenedorestu.innerHTML = `
    <form id="MenuModificarEstudiante">
    <h3>Seleccione el item que desea Identificacion</h3>
    <label for="identificacionEstudiante">Numero de Identificacion del Estudiante:</label>
    <input type="number" id="identificacionEstudiante" required>
    
    <button type="button" onclick="GuardarModificionEstudiante()">Guardar Modificion Estudiante</button>
        
    <button id="atras" class="atras" onclick="opcionesEstudiantes()">atras</button>
    </form>

    `;
}
const modificarNombre=()=>{
    const contenedorestu = document.getElementById('crearEstudiante');
    contenedorestu.innerHTML = `
    <form id="MenuModificarEstudiante">
    <h3>Menu Modificar Nombre</h3>
    <label for="nombreEstudiante">Nombre del Estudiante:</label>
    <input type="text" id="nombreEstudiante" required></input>
    
    <button type="button" onclick="GuardarModificionEstudiante()">Guardar Modificion Estudiante</button>
        
    <button id="atras" class="atras" onclick="opcionesEstudiantes()">atras</button>
    </form>
    `;
}

const modificarEdad=()=>{
    const contenedorestu = document.getElementById('crearEstudiante');
    contenedorestu.innerHTML = `
    <form id="MenuModificarEstudiante">
    <h3>Menu Modificar Edad</h3>
    <label for="identificacionEstudiante">Numero de Identificacion del Estudiante:</label>
    <input type="number" id="identificacionEstudiante" required>
    
    <button type="button" onclick="GuardarModificionEstudiante()">Guardar Modificion Estudiante</button>
        
    <button id="atras" class="atras" onclick="opcionesEstudiantes()">atras</button>
    </form>
    `;
}
const modificarEmail=()=>{
    const contenedorestu = document.getElementById('crearEstudiante');
    contenedorestu.innerHTML = `
    <form id="MenuModificarEstudiante">
    <h3>Menu Modificar Email</h3>
    <label for="emailEstudiante">Correo Electrónico del Estudiante:</label>
    <input type="email" id="emailEstudiante" required>
    
    <button type="button" onclick="GuardarModificionEstudiante()">Guardar Modificion Estudiante</button>
        
    <button id="atras" class="atras" onclick="opcionesEstudiantes()">atras</button>
    </form>
    `;
}

const verificarEstudiantes= async=()=>{
    const Estado='';
    const id=document.getElementById('identificacionEstudiante')
    const contenedorestu = document.getElementById('crearEstudiante');
    contenedorestu.innerHTML = `
      <form id="MenuModificarEstudiante">
        <h3>Menu Mofificar Estudiantes</h3>
        <label for="identificacionEstudiante">Numero de Identificacion del Estudiante:</label>
        <input type="number" id="identificacionEstudiante" required>
      </form>
  `;
    for ( const estudiante of listaEstiudiantes){
        if (estudiante[identificaion]===id){
            alert('Estudiante Encontrado!');
            Estado='Encontrado'
        }
        else{
            alert('No se encontro el estudiante!')
        }
    }

    return [Estado, estudiante]
}
