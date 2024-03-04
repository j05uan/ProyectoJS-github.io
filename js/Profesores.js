const botonesProfesor=async()=>{
    const profesoresForm = document.getElementById('OpcionesProfesores');
    const contenedor = document.getElementById('contenedor');
    const boton = document.getElementById("botonEstudiantes");
    const Departamentos =document.getElementById('Departamentos');
    const Profesores =document.getElementById('Profesores');
    const Universidad1 =document.getElementById('Universidad1');
    const Universidad2 =document.getElementById('Universidad2');
    const Universidad3 =document.getElementById('Universidad3');
    const Universidad4 =document.getElementById('Universidad4');
    const Universidad5 =document.getElementById('Universidad5');
    const Universidad6 =document.getElementById('Universidad6');
    const contenedor2 =document.getElementById('OpcionesProfesores');
    contenedor2.innerHTML = `
      <form>
          <button class="botonsProfesor" id="botoncrearProfesor" type="button" onclick="formularioCrearProfesor()">Crear Profesores</button>
          <button class="botonsProfesor" id="botonmodificarProfesor" type="button" onclick="()">Modificar Profesores</button>
          <button class="botonsProfesor" id="botonmostrarListado" type="button" onclick="mostrarListado()">Ver Listado de Profesores</button>
          <div id="profesoress"></div>
          <button id="atras" class="atras" onclick="inicio()">atras</button>
          
      </form>
  `;
   
    contenedor.style.alignContent='center';
    profesoresForm.style.display='flex';
    profesoresForm.style.width='1550px';
    profesoresForm.style.height='630px';
    profesoresForm.style.justifyContent='center';
    profesoresForm.style.padding='2rem ';


    boton.style.display="none";
    Departamentos.style.display='none';
    Profesores.style.display='none';
    Universidad1.style.display='none';
    Universidad2.style.display='none';
    Universidad3.style.display='none';
    Universidad4.style.display='none';
    Universidad5.style.display='none';
    Universidad6.style.display='none';
}

const formularioCrearProfesor= async()=>{
    const boton1= document.getElementById('botoncrearProfesor');
    const boton2 = document.getElementById('botonmodificarProfesor')
    const boton3 = document.getElementById('botonmostrarListado')
    const contenedorProfesores = document.getElementById('profesoress');
    contenedorProfesores.innerHTML = `
      <form id="MenuCrearProfesor">
        <h3>Menu Crear Profesores</h3>
        <label for="identificacionProfesor">Numero de Identificacion del Profesor:</label>
        <input type="number" id="identificacionProfesor" required>
        <label for="nombreProfesor">Nombre del Profesor:</label>
        <input type="text" id="nombreProfesor" required>
        <button id="atras" class="atras" onclick="botonesProfesor()">atras</button>
        
      </form>
  `;
   const atras=document.getElementById('atras');
   atras.style.display = 'none';
   boton1.style.display='none';
   boton2.style.display='none';
   boton3.style.display='none' ;
   await crearProfesores();
   
}

const crearProfesores= async ()=>{
    const nombreInput=document.getElementById('nombreProfesor');
    const IdInput=document.getElementById('identificacionProfesor')

    const nombre=nombreInput.value;
    const Id=IdInput.value;

    const nuevo={
        id:listaProfesores.length+1,
        identificaion:Id,
        nombre:nombre,
    }

  
    await guardar(nuevo);
    await loadEstudiantes();
    
    IdInput.value='';
    nombreInput.value='';

    alert('Profesor creado con éxito!');

    return nuevo;

}

const modificarProfesor =async()=>{
    const boton1= document.getElementById('botoncrearProfesor');
    const boton2 = document.getElementById('botonmodificarProfesor');
    const boton3 = document.getElementById('botonmostrarListado');
    const contenedorProfesores = document.getElementById('crearEProfesor');
    boton1.style.display='none';
    boton2.style.display='none';
    boton3.style.display='none';
    
    verificarProfesores();
    if (Estado==='Encontrado'){
        contenedorProfesores.innerHTML = `
      <form id="MenuModificarEProfesor">
        <h3>Menu Modificar EProfesores</h3>
        <h3>Seleccione el item que desea modificar</h3>
        
        <button for="identificacionEProfesor" onclick="modificarIdentificacionProfesor()">Numero de Identificacion del Profesor:</button>
        
        <button for="nombreEProfesor" onclick="modificarNombre()">Nombre del Profesor:</button>
        
        
        <button id="atras" class="atras" onclick="botonesProfesor()">atras</button>
        
      </form>
  `;
    }

}
const verificarProfesores= async=()=>{
    const Estado='';
    const nombre=document.getElementById('nombreProfesor')
    const contenedorProfesores = document.getElementById('crearProfesor');
    contenedorProfesores.innerHTML = `
      <form id="MenuModificarProfesor">
        <h3>Menu Mofificar Profesor</h3>
        <label for="nombreProfesor">Nombre del Profesor:</label>
        <input type="number" id="nombreProfesor" required>
      </form>
  `;
    for ( const estudiante of listaEstiudiantes){
        if (estudiante[identificaion]===nombre){
            alert('Estudiante Encontrado!');
            Estado='Encontrado'
        }
        else{
            alert('No se encontro el Profesor!')
        }
    }

    return [Estado, Profesores]
}
const modificarIdentificacionProfesor=()=>{
    const contenedorProfesores = document.getElementById('Profesores');
    contenedorProfesores.innerHTML = `
    <form id="MenuModificarProfesor">
    <h3>Menu modificar Identificacion</h3>
    <label for="identificacionProfesor">Numero de Identificacion del Profesor:</label>
    <input type="number" id="identificacionProfesor" required>
    
    <button type="button" onclick="GuardarModificionProfesor()">Guardar Modificion Profesor</button>
    
    <button type="button" onclick="GuardarModificion()">Guardar Modificion Profesor</button>
        
    <button id="atras" class="atras" onclick="modificarProfesor()">atras</button>
    </form>

    `;
}
const modificarNombre=()=>{
    const contenedorProfesores = document.getElementById('crearProfesor');
    contenedorProfesores.innerHTML = `
    <form id="MenuModificarProfesor">
    <h3>Menu modificar Nombre</h3>
    <label for="nombreProfesor">Nombre del Profesor:</label>
    <input type="text" id="nombreProfesor" required></input>
    
    <button type="button" onclick="GuardarModificionProfesor()">Guardar Modificion Profesor</button>
    
    <button type="button" onclick="GuardarModificion()">Guardar Modificion Profesor</button>
        
    <button id="atras" class="atras" onclick="modificarProfesor()">atras</button>
    </form>
    `;
}
