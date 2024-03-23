"use client"
import Link from 'next/link';
import useSwal from '@/app/_hooks/useSwal';
import axios from 'axios';
import { useZustand } from '@/app/_providers/Store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Login() {
  const router = useRouter();

  const { token, setToken, loginForm, setLoginForm } = useZustand();

  function userLogin(event: any) {
    axios.post('https://api.management.parse25proje.link/api/auth/login', loginForm)
      .then(async (response) => {
        const newToken = await response.data.data.token;
        setToken(newToken);
        useSwal("✅", "Logged-in successfully, redirecting...");
        return response;
      })
      .then(response => {
        setTimeout(() => {
          router.push('/dashboard');
        }, 1000)
      })
      .catch(() => {
        useSwal("❌", "Inputs are not correct, login failed");
      });
  }

  // const headers = {
  //   'accept': 'application/json',
  //   'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjM3LCJpYXQiOjE3MTExMDkyMzV9.82P4bhpWs3mo8oHZUwcIuouL2gZ7c3FH5GIFzXvqiao`
  // }
  // const boards = axios.get('https://api.management.parse25proje.link/api/boards', { headers })


  // setTimeout(() => {
  //   console.log("🚀 ~ Dashboard ~ boards:", boards);

  // }, 2000)

  if (token.length > 0) return (
    <div className=' justify-center text-3xl text-center mt-[50vh] translate-y-[-50%]'>
      <h1 className='mb-5'>You are already logged in.</h1>
      <Link href="/dashboard" className='btn btn-outline btn-primary px-10 hover:tracking-wide transition-all duration-500'>Go to dashboard?</Link>
    </div>
  )

  return (
    <div className='flex justify-center items-center w-full h-full'>
      <form className='flex flex-col w-96 justify-center mt-[50vh] translate-y-[-50%] max-sm:w-[calc(100%-32px)]'>
        <label className='mb-2' htmlFor="email">E-mail :</label>
        <input onChange={(event) => {
          setLoginForm({
            ...loginForm,
            email: event?.target.value
          })
        }} className='mb-5 rounded px-4 py-2' type="text" name="" id="email" />
        <label className='mb-2' htmlFor="password">Password :</label>
        <input onChange={(event) => {
          setLoginForm({
            ...loginForm,
            password: event?.target.value
          })
        }} className='mb-5 rounded px-4 py-2' type="password" name="" id="password" />
        <input onClick={(event) => { userLogin(event) }} type="button" className='btn btn-primary mb-5' value="Login" />
        <div className='flex justify-between'>

          <p className="">Don't have an account?   </p><Link className='text-primary hover:opacity-80' href="register">Register here</Link>
        </div>
      </form>
    </div>
  )
}
