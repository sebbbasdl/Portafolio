import './App.css';
import Navbar from './Componentes/Nav'
import Contacto from './Componentes/Contacto';
import Sobre_mi from './Componentes/Sobre_mi';

function App() {
    
  return (
    
    <div className='Principal'>
      <div className='App'>
      <Navbar></Navbar>
      </div>
      
      
      
      <div className='todo_sm'>
      <div className="titulo_sm">
                <h2>Sobre mi</h2>
      </div>
      <div className='SM'>
        <Sobre_mi></Sobre_mi>
      </div>
      </div>

      <div className='redes'>
        <Contacto></Contacto>
      </div>
    </div>
    
    
  );
}

export default App;
