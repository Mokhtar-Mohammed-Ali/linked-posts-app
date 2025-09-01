import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'


export default function MainLayOut() {
  return <>
    <div className='flex flex-col min-h-screen'>
      <NavBar />

      <main className="flex-grow bg-black/15">
        <Outlet />
      </main>

<Footer />

      
    </div>
  </>
}
