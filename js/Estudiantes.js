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
    const contenedor = document.getElementById('contenedor')
    const boton = document.getElementById("botonEstudiantes");
    const Departamentos =document.getElementById('Departamentos')
    const Prosfesores =document.getElementById('Prosfesores')
    const Universidad1 =document.getElementById('Universidad1')
    const Universidad2 =document.getElementById('Universidad2')
    const Universidad3 =document.getElementById('Universidad3')
    const Universidad4 =document.getElementById('Universidad4')
    const Universidad5 =document.getElementById('Universidad5')
    const Universidad6 =document.getElementById('Universidad6')

    const contenedor2 = document.getElementsByClassName('Informacion')

    contenedor.style.alignContent='center'
    estudiantesform.style.display='flex'
    estudiantesform.style.width='1550px'
    estudiantesform.style.height='630px'
    estudiantesform.style.justifyContent='center'
    estudiantesform.style.padding='2rem '


    boton.style.display="none"
    Departamentos.style.display='none'
    Prosfesores.style.display='none'
    Universidad1.style.display='none'
    Universidad2.style.display='none'
    Universidad3.style.display='none'
    Universidad4.style.display='none'
    Universidad5.style.display='none'
    Universidad6.style.display='none'

}
