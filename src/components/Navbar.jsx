import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {

  const { isLoggedIn } = useContext(AuthContext)

  const navigate = useNavigate()

  const { authenticateUser } = useContext(AuthContext)

  const handleLogout = async () => {

    // borrar el token de local storage
    localStorage.removeItem("authToken")

    try {
      
      // como el token no existe, la funcion cambia los estados del contexto para indicar que el usuario ya no está logeado
      await authenticateUser()

      navigate("/login") // o cualquier otra página pública

    } catch (error) {
      console.log(error) 
    }
  }

  return (
    <nav>
      <Link to="/">Home</Link>

      {isLoggedIn === true ? (
        <>
          <Link to="/private-page-example">Ejemplo Privado</Link>
          <Link onClick={handleLogout}>Cerrar sesión</Link>
        </> ) : (
          <>
          <Link to="/signup">Registro</Link>
          <Link to="/login">Acceso</Link>
        </>
        )
      }

    </nav>
  );
}

export default Navbar;
