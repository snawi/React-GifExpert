
import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from '../useContext/HomePage'
import AboutPage from '../useContext/AboutPage'
import LoginPage from '../useContext/LoginPage'
import NavBar from "./NavBar"
import UserProvider from "./context/UserProvider"


const MainApp = () => {
  return (
    
   <UserProvider>

   
        <h2>desde app</h2>

        <NavBar/>

       



        <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="about" element={ <AboutPage/> } />
            <Route path="login" element={ <LoginPage/> } />

            {/* cuando se le pasa cualquier ruta */}
            <Route path="/*" element={ <Navigate to="/about"/> } />

        </Routes>
    </UserProvider>
    
  )
}

export default MainApp
