import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function AuthLayOut() {
  return <>
       <NavBar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
   
  <Outlet/>
 
    </div>
   <Footer/>
 </>
}
