import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario.js';
import Tarea from './Tarea.js';
import '../hojas-de-estilo/ListaDeTareas.css'



function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
      if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
 };


  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
       if (tarea.id === id) {
        tarea.compleatada = !tarea.compleatada;
       } 
       return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor' >
       {
          tareas.map((tarea) => 
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto} 
              completada={tarea.compleatada} 
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea} />         
            )
       }
      </div>
    </>
  );
}
        


    
          
export default ListaDeTareas;





