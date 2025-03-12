'use client'

import { useWixClient } from "@/hooks/useWixClient"
import { useState } from "react"

enum MODE {
  LOGIN='LOGIN',
  REGISTER = "REGISTER",
  RESET_PASSWORD = 'RESET_PASSWORD',
  EMAIL_VERFICATION ='EMAIL_VERFICATION'
}
function Login() {

  const [mode, setMode] = useState(MODE.LOGIN)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailCode, setEmailCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const formTitle =
    mode === MODE.LOGIN
    ? 'Login In'
    : mode === MODE.REGISTER
    ? 'Register'
    : mode === MODE.RESET_PASSWORD
    ? 'Reset Password'
    : 'Verify Your Email'

  const buttonTitle =
    mode === MODE.LOGIN
    ? 'Login'
    : mode === MODE.REGISTER
    ? 'Register'
    : mode === MODE.RESET_PASSWORD
    ? 'Reset'
    : 'Verify'

  const wixClient = useWixClient()
  return (
    <div className="border border-black px-4 md:px-8 lg:px-16 xl:32 2xl: relative h-[calc(100vh-80px)] flex items-center justify-center">
      <form action="" className="border flex flex-col gap-8">
        <h1 className="text-2xl font-semibold">{formTitle}</h1>
        {mode===MODE.REGISTER ?(
          <div className="border flex flex-col gap-2">
            <label htmlFor="">Username</label>
            <input type="text" name="username" placeholder="john" className="ring-2 ring-gray-300 rounded-md p-4"/>
          </div>
        ): null}
        {mode !== MODE.EMAIL_VERFICATION ? (
          <div className="border flex flex-col gap-2">
            <label htmlFor="" className="text-sm text-gray-700">E-Mail</label>
            <input type="text" name="username" placeholder="john@gmail.com" className="ring-2 ring-gray-300 rounded-md p-4"/>
          </div>
        ):(
          <div className="border flex flex-col gap-2">
            <label htmlFor="" className="text-sm text-gray-700">Verification</label>
            <input type="text" name="emailCode" placeholder="code" className="ring-2 ring-gray-300 rounded-md p-4"/>
          </div>
        )}
        {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
          <div className="border flex flex-col gap-2">
            <label htmlFor="" className="text-sm text-gray-700">Password</label>
            <input type="password" name="password" placeholder="Enter your password" className="ring-2 ring-gray-300 rounded-md p-4"/>
          </div>
        ):(
          null
        )}
        {mode === MODE.LOGIN && (
          <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.RESET_PASSWORD)}>Forgot Password</div>
        )}
        <button className="bg-red-400 text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed" disabled={isLoading}>
          {isLoading? 'Loading...':buttonTitle}
        </button>

        {error &&(
          <div className="text-red-600">{error}</div>
        )}
        {mode ===MODE.LOGIN && (
          <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.REGISTER)}>Don't have an account?</div>
        )}
        {mode ===MODE.LOGIN && (
          <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.LOGIN)}>Have an account?</div>
        )}
        {mode ===MODE.RESET_PASSWORD && (
          <div className="text-sm underline cursor-pointer" onClick={()=>setMode(MODE.LOGIN)}>Go back to Login.</div>
        )}
        {message && (
          <div className="text-green-600">{message}</div>
        )}
      </form>
    </div>
  )
}

export default Login
