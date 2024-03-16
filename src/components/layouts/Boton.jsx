import './Boton.css'

function Boton() {
    return (
        <div className='botones'>

            <button
                className="Boton"
                onClick={(event) => {
                    console.log('le diste click al segundo botón')
                    console.log(event)
                    console.log(event.target)
                }}
            >Crear cuenta</button>
            <button
                className="Boton"
                onClick={(event) => {
                    console.log('le diste click')
                    console.log(event)
                    console.log(event.target)
                }}
            >Siguiente </button>
        </div>
    );
}

export default Boton;




