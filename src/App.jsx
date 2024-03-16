import Encabezado from "./components/layouts/Encabezado";
import Login from "./components/layouts/Login";
import Soporte from "./components/layouts/Soporte";
import Boton from "./components/layouts/Boton";
function App() {
  
  let usuario = []


    
    return (
      <div className="container">
        <Encabezado />
        
        <Login usuario={usuario}/>
        <Soporte/>
        <Boton/>
      </div>
    );
  }



export default App ;
 
