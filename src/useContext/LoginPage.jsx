
import { UserContext } from "./context/UserContext"
import { useContext } from "react"


const LoginPage = () => {

const { user } = useContext( UserContext )

console.log( user )



  return (
    <>
        <h1>desde login page</h1>
        <h1>{user.email}</h1>|
    
    </>
  )
}

export default LoginPage
