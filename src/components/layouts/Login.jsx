import './Login.css'

const Login = ({ usuario }) => {
    return (
        <form className="login">
            <input value={usuario} type="text" />
            <a href="">¿Has olvidado tu correo electrónico?</a>
            <p>¿No es tu ordenador? Usa el modo invitado para iniciar sesión de forma privada</p>
            <a href="">Más información sobre cómo usar el modo invitado</a>
        </form>
    );
}

export default Login;

