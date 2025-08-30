import { useContext, useState } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


export default function AuthProtectedRoute({ children }) {
let {islogedIn}=useContext(AuthContext); 
   return (
        <div>{!islogedIn ? children : <Navigate to={"/"} />}</div>
    )
}
