import { AuthContext } from '../context/auth.context'
import service from '../services/service.config'
import { useContext, useEffect, useState } from 'react'

function PrivatePageExample() {

  const { role } = useContext(AuthContext)

  const [dataOnlyForLoggedUsers, setData] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      
      // call a private route here...
      const response = await service.get(`/ejemplo-ruta-privada`)
      console.log(response)

    } catch (error) {
      console.log(error)
    }
  }

  // loading handler here

  return (
    <div>
      
      <h3>Ejemplo de página privada</h3>
      <p>Solo usuarios que hayan validado credenciales deberian poder acceder y ver la siguiente información:</p>

      { role === "admin" && <button>Solo para Admin</button>}

    </div>
  )
}

export default PrivatePageExample