import { useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { Navigate } from "react-router-dom"

function OnlyPrivate(props) {

  const { isLoggedIn } = useContext(AuthContext)
  if (isLoggedIn) {
    // el usuario está logeado, continua con la página privada
    return props.children
  } else {
    // el usuario no está logeado, fuera de aqui, redireccionamos a cualquier página pública
    return <Navigate to="/login"/>
  }

}

export default OnlyPrivate