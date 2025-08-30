import { Button } from '@heroui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

export default function NotFoundPage() {
  return <>
  <div className="h-screen flex items-center justify-center">
 <NavBar/>
<div className="flex flex-col items-center justify-center text-center px-6">
   
       <div>
         <img
          src="https://illustrations.popsy.co/gray/crashed-error.svg"
          alt="404 Illustration"
          className="w-80 max-w-full mb-6"
        />
       </div>

     
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or was moved.
        </p>

     
          <Link to="/">
            <Button size="lg">
              Back to Home
            </Button>
          </Link>
         
      
      </div>
  </div>
 
   
  
 

  </>
}
