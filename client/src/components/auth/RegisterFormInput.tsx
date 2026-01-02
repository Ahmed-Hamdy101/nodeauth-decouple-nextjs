'use client';
import { AuthForms ,CreatAuthForms} from '@/types/auth.types'
import React, { ChangeEvent, useState } from 'react'
import AuthService from '@/services/auth.services'
import { useRouter } from "next/navigation"; 
const Auth:AuthService = new AuthService();

const FormInput:React.FC = () => {
  // Router 
  const router = useRouter();
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirm_password, setConfirmPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false) 


const handleSubmit = async (e: React.FormEvent): Promise<void> => {
  e.preventDefault();

  try {
    const RegisterForm: CreatAuthForms = {
    username,
      email,
      password,
    };
    if (password !== confirm_password) {
        alert('Passwords do not match!');
    }
        // register user
    const serverCreateResponse = await Auth.register(RegisterForm);
    console.log('serverCreateResponse',serverCreateResponse);
    router.push('/login');
  } catch (error: any) {
    console.error('Register failed:', error.response?.data || error.message);
    alert(error.response?.data?.message || 'Register failed!');
  }
};


  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto mt-10" >
      <fieldset className="flex flex-col gap-4  p-10 rounded-lg shadow-lg text-white bg-[#020522]">
        <legend className="pt-20 m-auto font-bold text-2xl">Artisan </legend>
        <div>
          <label htmlFor="username" className="block mb-1 font-medium">
            username
          </label>
          <input
            id="email"
            type="text"
            name='username'
            value={username }
            onChange={(e:ChangeEvent<HTMLInputElement>)=>setUsername(e.target.value)}
            placeholder="Enter username"
            className="form-control w-full px-3 py-2  shadow-lg bg-white text-black rounded-full"
          />
        </div>
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
          <label htmlFor="confirm_password" className="block mb-1 font-medium">
            Password
          </label>
          <input
            id="confirm_password"
            type="confirm_password"
            value={confirm_password}
            onChange={(e:ChangeEvent<HTMLInputElement>)=>setConfirmPassword(e.target.value)}
            name='confirm_password'
            placeholder="confirm Password"
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
