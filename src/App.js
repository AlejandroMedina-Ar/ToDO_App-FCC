
import './App.css';
import LogoFreeCodeCamp from './componentes/LogoFreeCodeCamp.js';
import ListaDeTareas from './componentes/ListaDeTareas.js';


function App() {
  return (
    <div className="aplicacion-tareas">
      <LogoFreeCodeCamp />
      <div className='tareas-lista-principal' >
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>

    <div className='dev_Persona' >Desarrollado por Alejandro Medina | 2023 </div>

    </div>
  
  );
}

export default App;
      

     
