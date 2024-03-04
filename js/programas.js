const botonesProgramas = async () => {
    const programasForm = document.getElementById('OpcionesProgramas');
    const contenedor = document.getElementById('contenedor');
    const boton = document.getElementById("botonEstudiantes");
    const Departamentos = document.getElementById('Departamentos');
    const Programas = document.getElementById('Programas');
    const Universidad1 = document.getElementById('Universidad1');
    const Universidad2 = document.getElementById('Universidad2');
    const Universidad3 = document.getElementById('Universidad3');
    const Universidad4 = document.getElementById('Universidad4');
    const Universidad5 = document.getElementById('Universidad5');
    const Universidad6 = document.getElementById('Universidad6');
    const contenedor2 = document.getElementById('OpcionesProgramas');
    contenedor2.innerHTML = `
      <form>
          <button class="botonsProgramas" id="botoncrearPrograma" type="button" onclick="formularioCrearPrograma()">Crear Programas</button>
          <button class="botonsProgramas" id="botonmodificarPrograma" type="button" onclick="()">Modificar Programas</button>
          <button class="botonsProgramas" id="botonmostrarListado" type="button" onclick="mostrarListado()">Ver Listado de Programas</button>
          <div id="programass"></div>
          <button id="atras" class="atras" onclick="inicio()">atras</button>
          
      </form>
  `;

    contenedor.style.alignContent = 'center';
    programasForm.style.display = 'flex';
    programasForm.style.width = '1550px';
    programasForm.style.height = '630px';
    programasForm.style.justifyContent = 'center';
    programasForm.style.padding = '2rem ';


    boton.style.display = "none";
    Departamentos.style.display = 'none';
    Programas.style.display = 'none';
    Universidad1.style.display = 'none';
    Universidad2.style.display = 'none';
    Universidad3.style.display = 'none';
    Universidad4.style.display = 'none';
    Universidad5.style.display = 'none';
    Universidad6.style.display = 'none';
}

const formularioCrearPrograma = async () => {
    const boton1 = document.getElementById('botoncrearPrograma');
    const boton2 = document.getElementById('botonmodificarPrograma');
    const boton3 = document.getElementById('botonmostrarListado');
    const atras=document.getElementById('atras')
    const contenedorProgramas = document.getElementById('programass');
    contenedorProgramas.innerHTML = `
      <form id="MenuCrearPrograma">
        <h3>Menu Crear Programas</h3>
        <label for="identificacionPrograma">Numero de Identificacion del Programa:</label>
        <input type="number" id="identificacionPrograma" required>
        <label for="nombrePrograma">Nombre del Programa:</label>
        <input type="text" id="nombrePrograma" required>
        <button id="atras" class="atras" onclick="botonesProgramas()">atras</button>
        
      </form>
  `;

    boton1.style.display = 'none';
    boton2.style.display = 'none';
    boton3.style.display = 'none';
    atras.style.display = 'none';

    await crearProgramas();

}

const crearProgramas = async () => {
    const nombreInput = document.getElementById('nombrePrograma');
    const IdInput = document.getElementById('identificacionPrograma')

    const nombre = nombreInput.value;
    const Id = IdInput.value;

    const nuevo = {
        id: listaProgramas.length + 1,
        identificaion: Id,
        nombre: nombre,
    }


    await guardar(nuevo);
    await loadEstudiantes();

    IdInput.value = '';
    nombreInput.value = '';

    alert('Programa creado con éxito!');

    return nuevo;

}

const modificarPrograma = async () => {
    const boton1 = document.getElementById('botoncrearPrograma');
    const boton2 = document.getElementById('botonmodificarPrograma');
    const boton3 = document.getElementById('botonmostrarListado');
    const contenedorProgramas = document.getElementById('crearEPrograma');
    boton1.style.display = 'none';
    boton2.style.display = 'none';
    boton3.style.display = 'none';

    verificarProgramas();
    if (Estado === 'Encontrado') {
        contenedorProgramas.innerHTML = `
      <form id="MenuModificarEPrograma">
        <h3>Menu Modificar EProgramas</h3>
        <h3>Seleccione el item que desea modificar</h3>
        
        <button for="identificacionEPrograma" onclick="modificarIdentificacionPrograma()">Numero de Identificacion del Programa:</button>
        
        <button for="nombreEPrograma" onclick="modificarNombre()">Nombre del Programa:</button>
        
        
        <button id="atras" class="atras" onclick="botonesProgramas()">atras</button>
        
      </form>
  `;
    }

}
const verificarProgramas = async = () => {
    const Estado = '';
    const nombre = document.getElementById('nombrePrograma')
    const contenedorProgramas = document.getElementById('crearPrograma');
    contenedorProgramas.innerHTML = `
      <form id="MenuModificarPrograma">
        <h3>Menu Mofificar Programa</h3>
        <label for="nombrePrograma">Nombre del Programa:</label>
        <input type="number" id="nombrePrograma" required>
      </form>
  `;
    for (const estudiante of listaEstiudiantes) {
        if (estudiante[identificaion] === nombre) {
            alert('Estudiante Encontrado!');
            Estado = 'Encontrado'
        } else {
            alert('No se encontro el Programa!')
        }
    }

    return [Estado, Programas]
}
const modificarIdentificacionPrograma = () => {
    const contenedorProgramas = document.getElementById('Programas');
    contenedorProgramas.innerHTML = `
    <form id="MenuModificarPrograma">
    <h3>Menu modificar Identificacion</h3>
    <label for="identificacionPrograma">Numero de Identificacion del Programa:</label>
    <input type="number" id="identificacionPrograma" required>
    
    <button type="button" onclick="GuardarModificionPrograma()">Guardar Modificion Programa</button>
    
    <button type="button" onclick="GuardarModificion()">Guardar Modificion Programa</button>
        
    <button id="atras" class="atras" onclick="modificarPrograma()">atras</button>
    </form>

    `;
}
const modificarNombre = () => {
  const contenedorProgramas = document.getElementById('crearPrograma');
  contenedorProgramas.innerHTML = `
  <form id="MenuModificarPrograma">
  <h3>Menu modificar Nombre</h3>
  <label for="nombrePrograma">Nombre del Programa:</label>
  <input type="text" id="nombrePrograma" required></input>
  
  <button type="button" onclick="GuardarModificionPrograma()">Guardar Modificion Programa</button>
  
  <button type="button" onclick="GuardarModificion()">Guardar Modificion Programa</button>
      
  <button id="atras" class="atras" onclick="modificarPrograma()">atras</button>
  </form>
  `;
}
