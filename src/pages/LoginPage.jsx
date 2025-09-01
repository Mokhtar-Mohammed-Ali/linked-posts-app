import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import { schema } from '../Schema/LoginSchema';
import { Login } from '../services/authServices';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Button, Input } from '@heroui/react';
import { AuthContext } from '../components/context/AuthContext';

export default function LoginPage() {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
 const navigate= useNavigate();
const {setIsLogedIn} =useContext(AuthContext);
  const { handleSubmit, register, formState: { errors, touchedFields } } = useForm({
    defaultValues: {
      email: "",
      passsword: ""
    },
    resolver: zodResolver(schema), mode: "onBlur", reValidateMode: "onBlur"
  });
  async function LoginData(userData) {
setLoading(true);
   const response=await Login(userData);
   console.log(response)
   setLoading(false);
   if (response.message){
    localStorage.setItem("token",response.token);
    setIsLogedIn(response.token);
navigate("/")
   } else{
    setError(response.error)
   }
  }
  return (
    <div className='bg-white md:min-w-lg flex flex-col gap-2 shadow-2xl py-6 px-4 rounded-3xl'>
      <h1 className='text-center text-4xl text-blue-400 font-bold mb-3'>Login Now</h1>
      <form onSubmit={handleSubmit(LoginData)} className='flex flex-col gap-6 py-3'>

        <Input isInvalid={Boolean(errors.email && touchedFields.email)} errorMessage={errors.email?.message} variant='bordered' type='email' {...register("email")} label="Email" />
        <Input isInvalid={Boolean(errors.password && touchedFields.password)} errorMessage={errors.password?.message} variant='bordered' type='password' {...register("password")} label="Password" />

        <Button isLoading={loading} type='submit' className='bg-blue-400 text-xl font-bold text-white py-4' variant='bordered'>Login</Button>

        {error && <p className='text-red-500 text-center'> {error}</p>}
      </form>
      <Link to="/register" className='text-red-400'> already you have not an account <span className='text-blue-400'>Register</span></Link>
    </div>
  )
}
