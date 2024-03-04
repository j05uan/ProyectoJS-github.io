const botonesAsignatura = async () => {
    const contenedorAsignaturas = document.getElementById('OpcionesAsignaturas');
    contenedorAsignaturas.innerHTML = `
      <form>
          <button class="botonsAsignaturas" id="botoncrearAsignatura" type="button" onclick="formularioCrearAsignatura()">Crear Asignaturas</button>
          <button class="botonsAsignaturas" id="botonmodificarAsignatura" type="button" onclick="modificarAsignatura()">Modificar Asignaturas</button>
          <button class="botonsAsignaturas" id="botonmostrarListado" type="button" onclick="mostrarListadoAsignaturas()">Ver Listado de Asignaturas</button>
          <div id="asignaturass"></div>
          <button id="atras" class="atras" onclick="volverInicio()">atras</button>
      </form>`;

    stylesContenedorNuevo(contenedorAsignaturas);
    limpiarpantalla();
}

const formularioCrearAsignatura = async () => {
    const boton1 = document.getElementById('botoncrearAsignatura');
    const boton2 = document.getElementById('botonmodificarAsignatura');
    const boton3 = document.getElementById('botonmostrarListado');
    const contenedorAsignaturas = document.getElementById('asignaturass');
    contenedorAsignaturas.innerHTML = `
      <form id="MenuCrearAsignatura">
        <h3>Menu Crear Asignaturas</h3>
        <label for="codigoAsignatura">Código de la Asignatura:</label>
        <input type="text" id="codigoAsignatura" required>
        <label for="creditosAsignatura">Créditos de la Asignatura:</label>
        <input type="number" id="creditosAsignatura" required>
        <label for="cuposAsignatura">Cupos Disponibles:</label>
        <input type="number" id="cuposAsignatura" required>
        <label for="profesorAsignatura">ID del Profesor:</label>
        <input type="number" id="profesorAsignatura" required>
        <label for="programaAsignatura">ID del Programa:</label>
        <input type="number" id="programaAsignatura" required>
        <!-- Puedes agregar más campos aquí según los requisitos de tu aplicación -->
        <button id="atras" class="atras" onclick="botonesAsignatura()">Atrás</button>
      </form>
  `;
    const atras = document.getElementById('atras');
    atras.style.display = 'none';
    boton1.style.display = 'none';
    boton2.style.display = 'none';
    boton3.style.display = 'none';
    await crearAsignaturas();
}


const crearAsignaturas = async () => {
    const codigoInput = document.getElementById('codigoAsignatura');
    const creditosInput = document.getElementById('creditosAsignatura');
    const cuposInput = document.getElementById('cuposAsignatura');

    const codigo = codigoInput.value;
    const creditos = parseInt(creditosInput.value);
    const cuposDisponibles = parseInt(cuposInput.value);

    const nuevaAsignatura = {
        id: listaAsignaturas.length + 1,
        curso_id: 1, // Asumiendo un curso_id predeterminado
        codigo: codigo,
        creditos: creditos,
        profesor_id: 1, // Asumiendo un profesor_id predeterminado
        cupos_disponibles: cuposDisponibles,
        programa_id: 1, // Asumiendo un programa_id predeterminado
        horario_clases: [] // Asumiendo que inicialmente no hay horarios
    };

    await guardarAsignatura(nuevaAsignatura);
    await loadEstudiantes();

    codigoInput.value = '';
    creditosInput.value = '';
    cuposInput.value = '';

    alert('Asignatura creada con éxito!');

    return nuevaAsignatura;
}

const modificarAsignatura = async () => {
    const boton1 = document.getElementById('botoncrearAsignatura');
    const boton2 = document.getElementById('botonmodificarAsignatura');
    const boton3 = document.getElementById('botonmostrarListado');
    const contenedorAsignaturas = document.getElementById('crearAsignatura');
    boton1.style.display = 'none';
    boton2.style.display = 'none';
    boton3.style.display = 'none';

    const Estado = await verificarAsignaturas();
    if (Estado === 'Encontrado') {
        contenedorAsignaturas.innerHTML = `
      <form id="MenuModificarAsignatura">
        <h3>Menu Modificar Asignaturas</h3>
        <h3>Seleccione el item que desea modificar</h3>
        <button for="codigoAsignatura" onclick="modificarCodigoAsignatura()">Código de la Asignatura:</button>
        <button for="creditosAsignatura" onclick="modificarCreditosAsignatura()">Créditos de la Asignatura:</button>
        <button for="cuposAsignatura" onclick="modificarCuposAsignatura()">Cupos Disponibles:</button>
        <button for="cursoAsignatura" onclick="modificarCursoAsignatura()">Curso de la Asignatura:</button>
        <button for="profesorAsignatura" onclick="modificarProfesorAsignatura()">Profesor de la Asignatura:</button>
        <button for="programaAsignatura" onclick="modificarProgramaAsignatura()">Programa de la Asignatura:</button>
        <button for="horarioAsignatura" onclick="modificarHorarioAsignatura()">Horario de la Asignatura:</button>
        <button id="atras" class="atras" onclick="botonesAsignatura()">Atrás</button>
      
        </form>`;
    }
}

const verificarAsignaturas = async () => {
    let Estado = '';
    const codigo = document.getElementById('codigoAsignatura').value;
    const contenedorEstudiantes = document.getElementById('crearEstudiante');
    contenedorEstudiantes.innerHTML = `
      <form id="MenuModificarEstudiante">
        <h3>Menu Modificar Asignatura</h3>
        <label for="codigoAsignatura">Código de la Asignatura:</label>
        <input type="text" id="codigoAsignatura" required>
        <label for="creditosAsignatura">Créditos de la Asignatura:</label>
        <input type="number" id="creditosAsignatura" required>
        <label for="cuposAsignatura">Cupos Disponibles:</label>
        <input type="number" id="cuposAsignatura" required>
      </form>`;

    for (const asignatura of listaAsignaturas) {
        if (asignatura.codigo === codigo) {
            alert('Asignatura Encontrada!');
            Estado = 'Encontrado';
            break;
        } else {
            alert('No se encontró la Asignatura!');
        }
    }

    return Estado;
}

const modificarCodigoAsignatura = () => {
    const contenedorAsignaturas = document.getElementById('Asignaturas');
    contenedorAsignaturas.innerHTML = `
    <form id="MenuModificarAsignatura">
    <h3>Menu Modificar Código de la Asignatura</h3>
    <label for="codigoAsignatura">Código de la Asignatura:</label>
    <input type="text" id="codigoAsignatura" required>
    <button type="button" onclick="GuardarModificionAsignatura()">Guardar Modificación del Código de la Asignatura</button>
    <button id="atras" class="atras" onclick="modificarAsignatura()">Atrás</button>
    </form>`;
}

const modificarCreditosAsignatura = () => {
    const contenedorEstudiantes = document.getElementById('crearEstudiante');
    contenedorEstudiantes.innerHTML = `
    <form id="MenuModificarAsignatura">
    <h3>Menu Modificar Créditos de la Asignatura</h3>
    <label for="creditosAsignatura">Créditos de la Asignatura:</label>
    <input type="number" id="creditosAsignatura" required>
    <button type="button" onclick="GuardarModificionAsignatura()">Guardar Modificación de Créditos de la Asignatura</button>
    <button id="atras" class="atras" onclick="modificarAsignatura()">Atrás</button>
    </form>`;
}

const modificarCuposAsignatura = () => {
    const contenedorEstudiantes = document.getElementById('crearEstudiante');
    contenedorEstudiantes.innerHTML = `
    <form id="MenuModificarAsignatura">
    <h3>Menu Modificar Cupos Disponibles de la Asignatura</h3>
    <label for="cuposAsignatura">Cupos Disponibles de la Asignatura:</label>
    <input type="number" id="cuposAsignatura" required>
    <button type="button" onclick="GuardarModificionAsignatura()">Guardar Modificación de Cupos Disponibles de la Asignatura</button>
    <button id="atras" class="atras" onclick="modificarAsignatura()">Atrás</button>
    </form>`;
}
const modificarCursoAsignatura = () => {
    const contenedorEstudiantes = document.getElementById('crearEstudiante');
    contenedorEstudiantes.innerHTML = `
    <form id="MenuModificarAsignatura">
    <h3>Menu Modificar Curso de la Asignatura</h3>
    <label for="cursoAsignatura">Curso de la Asignatura:</label>
    <input type="number" id="cursoAsignatura" required>
    <button type="button" onclick="GuardarModificionAsignatura()">Guardar Modificación del Curso de la Asignatura</button>
    <button id="atras" class="atras" onclick="modificarAsignatura()">Atrás</button>
    </form>`;
}

const modificarProfesorAsignatura = () => {
    const contenedorEstudiantes = document.getElementById('crearEstudiante');
    contenedorEstudiantes.innerHTML = `
    <form id="MenuModificarAsignatura">
    <h3>Menu Modificar Profesor de la Asignatura</h3>
    <label for="profesorAsignatura">Profesor de la Asignatura:</label>
    <input type="number" id="profesorAsignatura" required>
    <button type="button" onclick="GuardarModificionAsignatura()">Guardar Modificación del Profesor de la Asignatura</button>
    <button id="atras" class="atras" onclick="modificarAsignatura()">Atrás</button>
    </form>`;
}

const modificarProgramaAsignatura = () => {
    const contenedorEstudiantes = document.getElementById('crearEstudiante');
    contenedorEstudiantes.innerHTML = `
    <form id="MenuModificarAsignatura">
    <h3>Menu Modificar Programa de la Asignatura</h3>
    <label for="programaAsignatura">Programa de la Asignatura:</label>
    <input type="number" id="programaAsignatura" required>
    <button type="button" onclick="GuardarModificionAsignatura()">Guardar Modificación del Programa de la Asignatura</button>
    <button id="atras" class="atras" onclick="modificarAsignatura()">Atrás</button>
    </form>`;
}

const modificarHorarioAsignatura = () => {
    const contenedorEstudiantes = document.getElementById('crearEstudiante');
    contenedorEstudiantes.innerHTML = `
    <form id="MenuModificarAsignatura">
    <h3>Menu Modificar Horario de la Asignatura</h3>
    <!-- Aquí debes agregar campos para editar los horarios -->
    <button type="button" onclick="GuardarModificionAsignatura()">Guardar Modificación del Horario de la Asignatura</button>
    <button id="atras" class="atras" onclick="modificarAsignatura()">Atrás</button>
    </form>`;
}


