"use client"

import useSwal from '@/app/_hooks/useSwal';
import { useZustand } from '@/app/_providers/Store';
import axios from 'axios';


export default function Register() {
  const { registerForm, setRegisterForm } = useZustand()
  console.log(registerForm)
  console.log(registerForm.username)
  function userRegister(event: any) {
    event?.preventDefault();
    axios.post('https://api.management.parse25proje.link/api/auth/register', registerForm)
      .then(() => {
        useSwal("Success", "Registered successfully")
        useSwal("✅", "Registered successfully")
        setRegisterForm({ username: "", email: "", password: "" })
      })
      .catch(() => {
        useSwal("❌", "Registered successfully")
      });
  }



  return (
    <div className='flex justify-center items-center w-full h-full'>
      <form className='flex flex-col w-96 justify-center mt-[50vh] translate-y-[-50%]'>
        <label className='mb-2' htmlFor="username">Username :</label>
        <input onChange={(event) => {
          setRegisterForm({
            ...registerForm,
            username: event?.target.value
          })
        }} className='mb-5 rounded px-4 py-2' value={registerForm.username} type="text" name="username" id="username" />
        <label className='mb-2' htmlFor="email">E-Mail :</label>
        <input onChange={(event) => {
          setRegisterForm({
            ...registerForm,
            email: event?.target.value
          })
        }} className='mb-5 rounded px-4 py-2' value={registerForm.email} type="email" name="email" id="email" />
        <label className='mb-2' htmlFor="password">Password :</label>
        <input onChange={(event) => {
          setRegisterForm({
            ...registerForm,
            password: event?.target.value
          })
        }} className='mb-5 rounded px-4 py-2' value={registerForm.password} type="password" name="password" id="password" />
        <input onClick={(event) => { userRegister(event) }} type="button" className='btn btn-primary' value="Register" />
      </form>
    </div>
  )
}
