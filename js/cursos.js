const botonesCursos = async () => {
    const contenedorCursos = document.getElementById('OpcionesCursos');
    contenedorCursos.innerHTML = `
      <form>
          <button class="botonsCursos" id="botoncrearCurso" type="button" onclick="formularioCrearCurso()">Crear Cursos</button>
          <button class="botonsCursos" id="botonmodificarCurso" type="button" onclick="modificarCurso()">Modificar Cursos</button>
          <button class="botonsCursos" id="botonmostrarListado" type="button" onclick="mostrarListadoCursos()">Ver Listado de Cursos</button>
          <div id="cursos"></div>
          <button id="atras" class="atras" onclick="volverInicio()">atras</button>
      </form>`;

    stylesContenedorNuevo(contenedorCursos);
    limpiarpantalla();
}

const formularioCrearCurso = async () => {
  const boton1 = document.getElementById('botoncrearCurso');
  const boton2 = document.getElementById('botonmodificarCurso');
  const boton3 = document.getElementById('botonmostrarListado');
  const contenedorCursos = document.getElementById('cursos');
  contenedorCursos.innerHTML = `
    <form id="MenuCrearCurso">
      <h3>Menu Crear Cursos</h3>
      <label for="nombreCurso">Nombre del Curso:</label>
      <input type="text" id="nombreCurso" required>
      <label for="codigoCurso">Código del Curso:</label>
      <input type="text" id="codigoCurso" required>
      <label for="guiaCatedra">Guía de Cátedra:</label>
      <input type="text" id="guiaCatedra" required>
      <button type="button" onclick="crearCurso()">Crear Curso</button>
      <button id="atras" class="atras" onclick="botonesCursos()">atras</button>
    </form>
`;
  const atras = document.getElementById('atras');
  atras.style.display = 'none';
  boton1.style.display = 'none';
  boton2.style.display = 'none';
  boton3.style.display = 'none';
  await crearCursos();
}

const crearCursos = async () => {
  const nombreInput = document.getElementById('nombreCurso');
  const codigoInput = document.getElementById('codigoCurso');
  const guiaCatedraInput = document.getElementById('guiaCatedra');

  const nombre = nombreInput.value;
  const codigo = codigoInput.value;
  const guiaCatedra = guiaCatedraInput.value;

  const nuevoCurso = {
      id: listaCursos.length + 1,
      nombre: nombre,
      codigo: codigo,
      guia_catedra: guiaCatedra,
  };

  await guardarCurso(nuevoCurso);
  await loadCursos();

  nombreInput.value = '';
  codigoInput.value = '';
  guiaCatedraInput.value = '';

  alert('Curso creado con éxito!');

  return nuevoCurso;
}

const modificarCurso = async () => {
  const boton1 = document.getElementById('botoncrearCurso');
  const boton2 = document.getElementById('botonmodificarCurso');
  const boton3 = document.getElementById('botonmostrarListado');
  const contenedorCursos = document.getElementById('crearCurso');
  boton1.style.display = 'none';
  boton2.style.display = 'none';
  boton3.style.display = 'none';

  verificarCursos();
  if (Estado === 'Encontrado') {
      contenedorCursos.innerHTML = `
    <form id="MenuModificarCurso">
      <h3>Menu Modificar Cursos</h3>
      <h3>Seleccione el item que desea modificar</h3>
      <button for="nombreCurso" onclick="modificarNombreCurso()">Nombre del Curso:</button>
      <button for="codigoCurso" onclick="modificarCodigoCurso()">Código del Curso:</button>
      <button for="guiaCatedra" onclick="modificarGuiaCatedra()">Guía de Cátedra:</button>
      <button id="atras" class="atras" onclick="botonesCursos()">atras</button>
    </form>`;
  }
}

const verificarCursos = async () => {
  const Estado = '';
  const nombre = document.getElementById('nombreCurso');
  const contenedorCursos = document.getElementById('crearCurso');
  contenedorCursos.innerHTML = `
    <form id="MenuModificarCurso">
      <h3>Menu Mofificar Curso</h3>
      <label for="nombreCurso">Nombre del Curso:</label>
      <input type="text" id="nombreCurso" required>
    </form>`;
  for (const curso of listaCursos) {
      if (curso[nombre] === nombre) {
          alert('Curso Encontrado!');
          Estado = 'Encontrado';
      } else {
          alert('No se encontró el Curso!');
      }
  }

  return [Estado, Cursos];
}

const modificarNombreCurso = () => {
  const contenedorCursos = document.getElementById('Cursos');
  contenedorCursos.innerHTML = `
  <form id="MenuModificarCurso">
  <h3>Menu modificar Nombre</h3>
  <label for="nombreCurso">Nombre del Curso:</label>
  <input type="text" id="nombreCurso" required></input>
  <button type="button" onclick="GuardarModificionCurso()">Guardar Modificación Curso</button>
  <button id="atras" class="atras" onclick="modificarCurso()">atras</button>
  </form>`;
}

const modificarCodigoCurso = () => {
  const contenedorCursos = document.getElementById('Cursos');
  contenedorCursos.innerHTML = `
  <form id="MenuModificarCurso">
  <h3>Menu modificar Código</h3>
  <label for="codigoCurso">Código del Curso:</label>
  <input type="text" id="codigoCurso" required></input>
  <button type="button" onclick="GuardarModificionCurso()">Guardar Modificación Curso</button>
  <button id="atras" class="atras" onclick="modificarCurso()">atras</button>
  </form>`;
}

const modificarGuiaCatedra = () => {
  const contenedorCursos = document.getElementById('Cursos');
  contenedorCursos.innerHTML = `
  <form id="MenuModificarCurso">
  <h3>Menu modificar Guía de Cátedra</h3>
  <label for="guiaCatedra">Guía de Cátedra:</label>
  <input type="text" id="guiaCatedra" required></input>
  <button type="button" onclick="GuardarModificionCurso()">Guardar Modificación Curso</button>
  <button id="atras" class="atras" onclick="modificarCurso()">atras</button>
  </form>`;
}
const modificarGuiaCatedra = () => {
  const contenedorCursos = document.getElementById('Cursos');
  contenedorCursos.innerHTML = `
  <form id="MenuModificarCurso">
  <h3>Menu modificar Guía de Cátedra</h3>
  <label for="guiaCatedra">Guía de Cátedra:</label>
  <input type="text" id="guiaCatedra" required></input>
  <button type="button" onclick="GuardarModificionCurso()">Guardar Modificación Curso</button>
  <button id="atras" class="atras" onclick="modificarCurso()">atras</button>
  </form>`;
}

const guardarModificacionCurso = () => {
  // Aquí deberías implementar la lógica para guardar la modificación del curso
  alert('Modificación del curso guardada con éxito!');
}

// Agrega la función para cargar los cursos al inicio si es necesario
const loadCursos = async () => {
  // Lógica para cargar los cursos
}

// Debes tener definidas las variables listaCursos y listaEstudiantes donde sea apropiado

// Asegúrate de tener definidas las funciones guardarCurso y otras necesarias para manejar los cursos

// Además, asegúrate de tener definidos los botones y elementos necesarios en tu HTML para que funcione el código correctamente.

// Recuerda adaptar el HTML y el manejo de eventos según las necesidades de tu aplicación.

