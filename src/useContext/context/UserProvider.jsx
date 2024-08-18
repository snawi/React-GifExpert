
import { UserContext } from "./UserContext"

//user provider es la informacion que queremos tomar para los otros componentes
const UserProvider = ({ children }) => {

    const user = {
        id: 12,
        nombre: 'wilmer',
        email: 'wil788ramirez@hotmail.com'
    }


  return (
   <UserContext.Provider value={{ user }}>
    {children}
   </UserContext.Provider>
  )
}

export default UserProvider
