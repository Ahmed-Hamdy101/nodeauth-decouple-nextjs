'use client';
import { AuthForms } from '@/types/auth.types'
import React, { ChangeEvent, useState } from 'react'
import AuthService from '@/services/auth.services'
import { useRouter } from "next/navigation"; 
const Auth:AuthService = new AuthService();

const FormInput:React.FC = () => {
  // Router 
  const router = useRouter();
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false) 


const handleSubmit = async (e: React.FormEvent): Promise<void> => {
  e.preventDefault();

  try {
    const loginForm: AuthForms = {
      email,
      password,
    };

    const serverResponse = await Auth.login(loginForm);
    // get token from response 
   const token = serverResponse.token ;
    // get user info
    const user = serverResponse.user ;

    if (token && user) {  
      // Store user info in localStorage
      localStorage.setItem('user', JSON.stringify(user));
      // Redirect to dashboard or another page
      router.push('/dashboard');
    } else {
      throw new Error('No access token returned');
    }
  } catch (error: any) {
    console.error('Login failed:', error.response?.data || error.message);
    alert(error.response?.data?.message || 'Login failed!');
  }
};


  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto mt-10" >
      <fieldset className="flex flex-col gap-4  p-10 rounded-lg shadow-lg text-white bg-[#020522]">
        <legend className="pt-20 m-auto font-bold text-2xl">Artisan </legend>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            id="email"
            type="text"
            name='email'
            value={email }
            onChange={(e:ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)}
            placeholder="Enter Email"
            className="form-control w-full px-3 py-2  shadow-lg bg-white text-black rounded-full"
          />
        </div>
        <div>
          <label htmlFor="password-input" className="block mb-1 font-medium">
            Password
          </label>
          <input
            id="password-input"
            type="password"
            value={password}
            onChange={(e:ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}
            name='password'
            placeholder="Enter Password"
            className="form-control w-full px-3 py-2 shadow-lg bg-white text-black  rounded-full"
          />
        </div>
        <div>
        <button type="submit" disabled={loading} className="rounded-full shadow-lg bg-red-500 w-full py-2">
          {loading ? 'Logging in...' : 'Login'}
        </button>
        </div>
      </fieldset>
    </form>
  )
}

export default FormInput
