import { createContext, useEffect, useState } from "react";
import { GetUserLoggedData } from "../../services/authServices";

export const AuthContext = createContext();


export default function AuthContextProvider({ children }) {
  const [islogedIn, setIsLogedIn] = useState(localStorage.getItem('token') != null);
  const [userData, setUserData] = useState( null);
  console.log(userData);
async function GetUserData() {
  let response = await GetUserLoggedData();
  if(response.message){
    setUserData(response.user)
  }
}


useEffect(()=>{
if(islogedIn){
  GetUserData();
}

},[islogedIn]);

  return <AuthContext.Provider value={{ islogedIn, setIsLogedIn,userData, setUserData ,GetUserData}}>
    {children}
  </AuthContext.Provider>
}
