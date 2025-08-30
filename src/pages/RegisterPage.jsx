import { Button, Input, Select, SelectItem } from '@heroui/react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod"
import { Register } from '../services/authServices';
import { useState } from 'react';
import { schema } from '../Schema/RegisterSchema';





export default function RegisterPage() {


  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const { handleSubmit, register, formState: { errors, touchedFields } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      dateOfBirth: "",
      gender: ""
    },
    resolver: zodResolver(schema),
    mode: "onBlur",
    reValidateMode: "onBlur"
  });



  async function signUp(userData) {
    setLoading(true);
    const response = await Register(userData);
    if (response.message) {
      navigate("/login");
    } else {
      setError(response.error)
    }
    setLoading(false);
    // console.log(userData);

  }
  // console.log(errors);

  // {/* validation by form hooks and also use regex with it  youn can do that with all inputs but we will use ZOD FOR VALIDATION*/}
  //     <Input isInvalid={errors.name} errorMessage={errors.name?.message} variant='bordered' type='text' {...register("name", { required: "name is required", minLength: { value: 3, message: "3 char at least" }, maxLength: { value: 20, message: "20 char at the most" }, pattern: { value: /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/, message: "Only letters, spaces, hyphens, and apostrophes are allowed." } })} label="Name" />
  //     {/* {errors.name && <p>{errors.name.message}</p>}  IF WE DIDMT USE FORM HOOL VALIDATIO*/}
  return (
    <div className='bg-white md:min-w-md flex flex-col gap-2 shadow-2xl py-6 px-4 rounded-3xl'>
      <h1 className='text-center text-4xl text-blue-400 font-bold mb-3'>Register Now</h1>
      <form onSubmit={handleSubmit(signUp)} className='flex flex-col gap-6 py-3'>
        <Input isInvalid={Boolean(errors.name && touchedFields.name)} errorMessage={errors.name?.message} variant='bordered' type='text' {...register("name")} label="Name" />

        <Input isInvalid={Boolean(errors.email && touchedFields.email)} errorMessage={errors.email?.message} variant='bordered' type='email' {...register("email")} label="Email" />
        <Input isInvalid={Boolean(errors.password && touchedFields.password)} errorMessage={errors.password?.message} variant='bordered' type='password' {...register("password")} label="Password" />
        <Input isInvalid={Boolean(errors.rePassword && touchedFields.rePassword)} errorMessage={errors.rePassword?.message} variant='bordered' type='password' {...register("rePassword")} label="rePassword" />
        <div className="flex gap-4">
          <Input isInvalid={Boolean(errors.dateOfBirth && touchedFields.dateOfBirth)} errorMessage={errors.dateOfBirth?.message} variant='bordered' type='date' {...register("dateOfBirth")} label="Date of Birth" />

          <Select isInvalid={Boolean(errors.gender && touchedFields.gender)} errorMessage={errors.gender?.message} variant='bordered' {...register("gender")} label="the gender">

            <SelectItem key="male" >Male</SelectItem>
            <SelectItem key="female" >Fmale</SelectItem>

          </Select>
        </div>
        <Button isLoading={loading} type='submit' className='bg-blue-400 text-xl font-bold text-white py-4' variant='bordered'>Register</Button>

        {error && <p className='text-red-500 text-center'> {error}</p>}
      </form>
      <Link to="/login" className='text-red-400'> already you have an account <span className='text-blue-400'>Login</span></Link>
    </div>
  )
}
